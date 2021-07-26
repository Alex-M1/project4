import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { notifications } from 'helpers/notification';
import { SERVER } from 'constants/urls';
import { LOCAL_STORAGE as LS } from 'constants/constants';
import { stompClient, createRoomChanel } from 'src/helpers/stompClient';
import { IGameData } from 'common/types/constantsTypes';
import watcherTicTac, { doBotStepSaga, roomChannelSaga, stepHistory, withBotGameSaga } from '../sagas';
import { ActionTypes as AT } from '../actionTypes';
import { doStep, setIsGameEnd } from '../actions';

jest.mock('src/helpers/stompClient', () => ({
  createRoomChanel: jest.fn(),
  stompClient: {
    send: jest.fn(),
  },
}));

describe('TicTacSagas', () => {
  describe('roomChannelSaga', () => {
    let action: any;
    beforeEach(() => {
      action = {
        payload: 'str',
        type: AT.CREATE_ROOM_CHANNEL,
      };
    });
    it('should call roomChannelSaga without error', () => {
      const roomChannel = [];
      const actionMock = { type: '' };
      testSaga(roomChannelSaga, action)
        .next()
        .put(setIsGameEnd(false))
        .next()
        .call(
          [stompClient, 'send'],
          SERVER.joinRoom,
          {},
          JSON.stringify({
            guestLogin: 'Bot',
            id: action.payload,
          }),
        )
        .next()
        .call(createRoomChanel)
        .next(roomChannel)
        .take(roomChannel)
        .next(actionMock)
        .put(actionMock)
        .next();
    });
    it('should call workerConnection with error', () => {
      testSaga(roomChannelSaga, action)
        .next()
        .throw(new Error())
        .call(notifications, { message: 'something_wrong' })
        .next()
        .isDone();
    });
  });

  describe('withBotGameSaga', () => {
    let action: any;
    beforeEach(() => {
      action = {
        payload: {
          square: '2',
          id: 'asda',
        },
        type: AT.STEP_WITH_BOT,
      };
    });
    it('should call withBotGameSaga without error', () => {
      const login = 'sdfs';
      const gameData = 'sad';
      const parsedGameData: IGameData = {
        roomId: '123',
        gameType: 'asdasd',
        playWith: 'bot',
      };
      const mockDate = 123213;
      const spy = jest
        .spyOn(Date, 'now')
        .mockImplementation(() => mockDate);
      const stepBody = {
        gameType: parsedGameData.gameType,
        stepDto: {
          login,
          step: action.payload.square.toString(),
          time: mockDate,
          id: action.payload.id,
        },
      };

      testSaga(withBotGameSaga, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .call([localStorage, 'getItem'], LS.gameOptions)
        .next(gameData)
        .call([JSON, 'parse'], gameData)
        .next(parsedGameData)
        .call(
          [stompClient, 'send'],
          SERVER.doStep,
          { uuid: action.payload.id },
          JSON.stringify(stepBody),
        )
        .next()
        .put(doStep(action.payload.square))
        .next()
        .call(
          [stompClient, 'send'],
          SERVER.getBotStep,
          {},
          JSON.stringify({
            id: action.payload.id,
            gameType: parsedGameData.gameType,
          }),
        )
        .next()
        .isDone();
      spy.mockRestore();
    });
    it('should call withBotGameSaga with error', () => {
      testSaga(withBotGameSaga, action)
        .next()
        .throw(new Error())
        .call(notifications, { message: 'something_wrong' })
        .next()
        .isDone();
    });
  });
  describe('doBotStepSaga', () => {
    let action: any;
    beforeEach(() => {
      action = {
        payload: 2,
        type: AT.DO_BOT_STEP,
      };
    });
    it('should call roomChannelSaga without error', () => {
      const gameData = 'sad';
      const parsedGameData: IGameData = {
        roomId: '123',
        gameType: 'asdasd',
        playWith: 'bot',
      };
      const mockDate = 123213;
      const spy = jest
        .spyOn(Date, 'now')
        .mockImplementation(() => mockDate);
      const stepBody = {
        gameType: parsedGameData.gameType,
        stepDto: {
          login: 'Bot',
          step: action.payload.toString(),
          time: mockDate,
          id: parsedGameData.roomId,
        },
      };
      testSaga(doBotStepSaga, action)
        .next()
        .call([localStorage, 'getItem'], LS.gameOptions)
        .next(gameData)
        .call([JSON, 'parse'], gameData)
        .next(parsedGameData)
        .call(
          [stompClient, 'send'],
          SERVER.doStep,
          { uuid: parsedGameData.roomId },
          JSON.stringify(stepBody),
        )
        .next()
        .put(doStep(action.payload))
        .next()
        .isDone();
      spy.mockRestore();
    });
    it('should call withBotGameSaga with error', () => {
      testSaga(doBotStepSaga, action)
        .next()
        .throw(new Error())
        .call(notifications, { message: 'something_wrong' })
        .next()
        .isDone();
    });
  });
  describe('stepHistory', () => {
    let action: any;
    beforeEach(() => {
      action = {
        payload: {
          winner: 'aasd',
        },
        type: AT.SET_STEP_HISTORY,
      };
    });
    it('should call stepHistory without error & winner is player', () => {
      const login = 'aasd';
      testSaga(stepHistory, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .put(setIsGameEnd(true))
        .next()
        .call(notifications, { message: 'you_win', type: 'info' })
        .next()
        .isDone();
    });
    it('should call stepHistory without error & player is loose', () => {
      const login = 'aasdd';
      testSaga(stepHistory, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .put(setIsGameEnd(true))
        .next()
        .call(notifications, { message: 'you_loose', type: 'warn' })
        .next()
        .isDone();
    });
    it('should call stepHistory without error & no field winner', () => {
      action.payload.winner = null;
      const login = 'aasdd';
      testSaga(stepHistory, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .isDone();
    });
    it('should call withBotGameSaga with error', () => {
      testSaga(stepHistory, action)
        .next()
        .throw(new Error())
        .call(notifications, { message: 'something_wrong' })
        .next()
        .isDone();
    });
  });
  describe('fork', () => {
    it('should fork watchers', () => {
      expectSaga(watcherTicTac)
        .put({ type: 'FORKED' })
        .run();
    });
  });
});
