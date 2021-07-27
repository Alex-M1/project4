import { CompatClient, Stomp } from '@stomp/stompjs';
import { GAME_SETTINGS, GAME_TYPE, LOCAL_STORAGE as LS } from 'constants/constants';
import { SERVER } from 'constants/urls';
import { eventChannel } from 'redux-saga';
import { IGameData } from 'common/types/constantsTypes';
import { doBotStep as doBotStepChecker, refreshField, setPossibleSteps } from 'store/checkers/actions';
import { addRoom, redirectToRoom } from 'store/room/actions';
import { clearFields, doBotStep, joinMyGame, setStepHistory } from 'store/ticTac/actions';
import { cookieMaster } from './cookieMaster';

export let stompClient: CompatClient | null = null;

export const connection = (token: string) => {
  const socket = new WebSocket(`${SERVER.socket}${SERVER.gameMenu}`);
  stompClient = Stomp.over(socket);
  return new Promise((resolve) => stompClient
    .connect({ Authorization: `Bearer ${token}` }, () => resolve(stompClient)));
};

export const createRoomChanel = () => eventChannel((emit) => {
  if (!stompClient) connection(cookieMaster.getCookie(LS.token));
  const gameData: IGameData = JSON.parse(localStorage.getItem(LS.gameOptions));
  const botStep = stompClient.subscribe(
    `${SERVER.topicBotStep}/${gameData.roomId}`,
    ({ body }) => emit(doBotStep(JSON.parse(body))),
  );
  const roomWatcher = stompClient.subscribe(
    `${SERVER.game}/${gameData.roomId}`,
    ({ body }) => {
      emit(setStepHistory(JSON.parse(body) || body));
    },
  );
  return () => {
    botStep.unsubscribe();
    roomWatcher.unsubscribe();
  };
});

export const createCheckerChannel = () => eventChannel((emit) => {
  if (!stompClient) connection(cookieMaster.getCookie(LS.token));
  const gameData: IGameData = JSON.parse(localStorage.getItem(LS.gameOptions));
  if (gameData.playWith === 'Bot') {
    stompClient.subscribe(
      `${SERVER.topicBotStep}/${gameData.roomId}`,
      ({ body }) => emit(doBotStepChecker(body)),
    );
  }
  const checkerWatcher = stompClient.subscribe(
    `${SERVER.game}/${gameData.roomId}`,
    ({ body }) => {
      const message = JSON.parse(body);
      if (message.field) {
        emit(refreshField(JSON.parse(body).field.gameField));
      }
    },
  );
  const userTopic = stompClient.subscribe(
    SERVER.userTopic,
    ({ body }) => {
      if (Array.isArray(JSON.parse(body))) {
        const cells = JSON.parse(body).map((el) => el.stepIndex);
        return emit(setPossibleSteps(cells));
      }
    },
  );
  return () => {
    userTopic.unsubscribe();
    checkerWatcher.unsubscribe();
  };
});

export const createStompChannel = (stompClient: CompatClient) => eventChannel((emit) => {
  let gameStepSub;
  let myRoomId = null;

  const roomsSub = stompClient.subscribe(
    SERVER.rooms,
    ({ body }) => {
      const login = localStorage.getItem(LS.login);
      const parsedBody = JSON.parse(body);
      const myRoom = parsedBody.find((room) => room.creatorLogin === login);

      if (myRoom) {
        if (gameStepSub) {
          myRoomId = null;
          // gameStepSub.unsubscribe();
        }
        gameStepSub = stompClient.subscribe(
          `${SERVER.game}/${myRoom.id}`,
          ({ body }) => {
            const parsedBody = JSON.parse(body);
            if (
              parsedBody.startTime
              && parsedBody.guestLogin !== GAME_SETTINGS.bot
              && parsedBody.gameType === GAME_TYPE.TIC_TAC_TOE
            ) {
              myRoomId = myRoom.id;

              emit(clearFields());
              emit(joinMyGame({
                id: myRoom.id,
                guestLogin: parsedBody.guestLogin,
                startTime: parsedBody.startTime,
                stepDtoList: parsedBody.stepDtoList,
                gameType: parsedBody.gameType,
              }));
            }
            if (myRoomId && myRoom.id === myRoomId) {
              emit(setStepHistory(parsedBody));
            }
            //-----------------------------------------------------
            if (parsedBody.gameType === GAME_TYPE.CHECKERS) {
              const message = JSON.parse(body);
              if (message.field) {
                emit(refreshField(message.field.gameField));
              }
              if (message.guestLogin) {
                const options: IGameData = JSON.parse(localStorage.getItem(LS.gameOptions));
                options.roomId = myRoom.id;
                options.gameType = 'Checkers';
                options.playWith = message.guestLogin;
                localStorage.setItem(LS.gameOptions, JSON.stringify(options));
                emit(redirectToRoom(message.gameType));
              }
            }
          },
        );
      }
      return emit(addRoom(parsedBody));
    });
  const errorSub = stompClient.subscribe(SERVER.errors, ({ body }) => console.log(body));
  return () => {
    roomsSub.unsubscribe();
    errorSub.unsubscribe();
  };
});

export const init = (stompClient: CompatClient) => {
  stompClient.send(SERVER.updateRoom);
};
