import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { cookieMaster } from 'helpers/cookieMaster';
import { notifications } from 'helpers/notification';
import { SERVER } from 'constants/urls';
import { v4 as uuidv4 } from 'uuid';
import { LOCAL_STORAGE as LS } from 'constants/constants';
import { connection, createStompChannel, init, stompClient } from 'src/helpers/stompClient';
import watcherGame, { workerConnection, createRoomSaga } from '../sagas';
import { ActionTypes as AT } from '../actionTypes';
import { getGameType } from '../selectors';

jest.mock('src/helpers/stompClient', () => ({
  connection: jest.fn(),
  createStompChannel: jest.fn(),
  init: jest.fn(),
  stompClient: {
    send: jest.fn(),
  },
}));

describe('credentials Saga', () => {
  describe('workerConnection', () => {
    let action: any;
    beforeEach(() => {
      action = {
        type: AT.SOCKET_CONNECTION,
      };
    });
    it('should call workerConnection without error', () => {
      const token = 'token';
      const stompClient = {};
      const stompChannel = [];
      const payload = '';
      //@ts-ignore
      testSaga(workerConnection, action)
        .next()
        .call([cookieMaster, 'getCookie'], LS.token)
        .next(token)
        .call(connection, token)
        .next(stompClient)
        .call(createStompChannel, stompClient)
        .next([])
        .call(init, stompClient)
        .next()
        .take(stompChannel)
        .next(payload)
        //@ts-ignore
        .put(payload)
        .next();
    });
    it('should call workerConnection with error', () => {
      //@ts-ignore
      testSaga(workerConnection, action)
        .next()
        .throw(new Error())
        .call(notifications, { message: 'something_wrong' })
        .next()
        .isDone();
    });
  });
  describe('createRoomSaga', () => {
    let action: any;
    beforeEach(() => {
      action = {
        type: AT.CREATE_ROOM,
      };
    });
    it('should call createRoomSaga without error', () => {
      const gameType = 'Checkers';
      const creatorLogin = 'login';
      const id = 'id';
      //@ts-ignore
      testSaga(createRoomSaga, action)
        .next()
        .select(getGameType)
        .next(gameType)
        .call([localStorage, 'getItem'], LS.login)
        .next(creatorLogin)
        .call(uuidv4)
        .next(id)
        .call([stompClient, 'send'], SERVER.createRoom, {}, JSON.stringify({ id, gameType, creatorLogin }))
        .next()
        .isDone();
    });
  });
  describe('fork', () => {
    it('should fork watchers', () => {
      expectSaga(watcherGame)
        .put({ type: 'FORKED' })
        .run();
    });
  });
});
