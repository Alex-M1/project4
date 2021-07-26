import { CompatClient, Stomp } from '@stomp/stompjs';
import { LOCAL_STORAGE as LS } from 'constants/constants';
import { SERVER } from 'constants/urls';
import { eventChannel } from 'redux-saga';
import { IGameData } from 'src/components/_common_/types/constantsTypes';
import { doBotStep as doBotStepChecker, refreshField, setPossibleSteps } from 'store/checkers/actions';
import { addRoom, redirectToRoom } from 'store/room/actions';
import { doBotStep, setStepHistory } from 'store/ticTac/actions';
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
    ({ body }) => emit(setStepHistory(JSON.parse(body) || body)),
  );
  return () => {
    botStep.unsubscribe();
    roomWatcher.unsubscribe();
  };
});

export const createCheckerChannel = () => eventChannel((emit) => {
  if (!stompClient) connection(cookieMaster.getCookie(LS.token));
  const gameData: IGameData = JSON.parse(localStorage.getItem(LS.gameOptions));
  const botStep = stompClient.subscribe(
    `${SERVER.topicBotStep}/${gameData.roomId}`,
    ({ body }) => emit(doBotStepChecker(body)),
  );
  const checketWatcher = stompClient.subscribe(
    `${SERVER.game}/${gameData.roomId}`,
    ({ body }) => {
      if (JSON.parse(body).field) {
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
    botStep.unsubscribe();
    userTopic.unsubscribe();
    checketWatcher.unsubscribe();
  };
});

export const createStompChannel = (stompClient: CompatClient) => eventChannel((emit) => {
  let subMyRoom;
  const roomsSub = stompClient.subscribe(
    SERVER.rooms,
    ({ body }) => {
      const rooms = JSON.parse(body);
      emit(addRoom(rooms));
      rooms.forEach((el) => {
        if (el.creatorLogin === localStorage.getItem(LS.login)) {
          subMyRoom = stompClient.subscribe(
            `${SERVER.game}/${el.id}`,
            ({ body }) => {
              const message = JSON.parse(body);
              if (message.field) {
                emit(refreshField(message.field.gameField));
              }
              if (message.guestLogin) {
                const options: IGameData = JSON.parse(localStorage.getItem(LS.gameOptions));
                options.playWith = message.guestLogin;
                localStorage.setItem(LS.gameOptions, JSON.stringify(options));
                emit(redirectToRoom(message.gameType));
              }
            },
          );
        }
      });
    },
  );
  const errorSub = stompClient.subscribe(SERVER.errors, ({ body }) => console.log(body));
  return () => {
    subMyRoom.unsubscribe();
    roomsSub.unsubscribe();
    errorSub.unsubscribe();
  };
});

export const init = (stompClient: CompatClient) => {
  stompClient.send(SERVER.updateRoom);
};
