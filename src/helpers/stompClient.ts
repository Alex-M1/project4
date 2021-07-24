import { CompatClient, Stomp } from '@stomp/stompjs';
import { LOCAL_STORAGE } from 'constants/constants';
import { SERVER } from 'constants/urls';
import { eventChannel } from 'redux-saga';
import { IGameData } from 'src/components/_common_/types/constantsTypes';
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
    ({ body }) => console.log(JSON.parse(body)),
  );
  const checketWatcher = stompClient.subscribe(
    `${SERVER.game}/${gameData.roomId}`,
    ({ body }) => console.log(JSON.parse(body)),
  );
  const userTopic = stompClient.subscribe(
    '/user/topic/game/ ',
    ({ body }) => console.log(JSON.parse(body)),
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
