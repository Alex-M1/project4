import { CompatClient, Stomp } from '@stomp/stompjs';
import { LOCAL_STORAGE } from 'constants/constants';
import { SERVER } from 'constants/urls';
import { eventChannel } from 'redux-saga';
import { IGameData } from 'src/components/_common_/types/constantsTypes';
import { doBotStep as doBotStepChecker, refreshField, setPossibleSteps } from 'store/checkers/actions';
import { addRoom } from 'store/room/actions';
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
  if (!stompClient) connection(cookieMaster.getCookie(LOCAL_STORAGE.token));
  const gameData: IGameData = JSON.parse(localStorage.getItem(LOCAL_STORAGE.gameOptions));
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
  if (!stompClient) connection(cookieMaster.getCookie(LOCAL_STORAGE.token));
  const gameData: IGameData = JSON.parse(localStorage.getItem(LOCAL_STORAGE.gameOptions));
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
  const roomsSub = stompClient.subscribe(
    SERVER.rooms,
    ({ body }) => emit(addRoom(JSON.parse(body))),
  );
  const errorSub = stompClient.subscribe(SERVER.errors, ({ body }) => console.log(body));
  return () => {
    roomsSub.unsubscribe();
    errorSub.unsubscribe();
  };
});

export const init = (stompClient: CompatClient) => {
  stompClient.send(SERVER.updateRoom);
};
