import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { notifications } from 'helpers/notification';
import { SERVER } from 'constants/urls';
import { GAME_TYPE, LOCAL_STORAGE as LS } from 'constants/constants';
import { stompClient, createRoomChanel } from 'src/helpers/stompClient';
import { IGameData } from 'common/types/constantsTypes';
import watcherTicTac, { doBotStepSaga, roomChannelSaga, stepHistory, withBotGameSaga, withOpponentGameSaga } from '../sagas';
import { ActionTypes as AT } from '../actionTypes';
import { clearFields, doStep, setIsGameEnd, setSquares, setTurn, setWinner } from '../actions';

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
        payload: { myOpponentGame: {} },
        type: AT.CREATE_ROOM_CHANNEL,
      };
    });
    it('should call roomChannelSaga without error with id', () => {
      const gameData = 'sad';
      const parsedGameData: IGameData = {
        roomId: '123',
        gameType: 'asdasd',
        playWith: 'bot',
      };
      const login = 'login';
      action.payload.myOpponentGame.id = '123';
      testSaga(roomChannelSaga, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .call([localStorage, 'getItem'], LS.gameOptions)
        .next(gameData)
        .call([JSON, 'parse'], gameData)
        .next(parsedGameData)
        .put(setIsGameEnd(false))
        .next()
        .put(clearFields())
        .next()
        .isDone();
      action.payload.myOpponentGame.id = null;
    });
    it('should call roomChannelSaga without error without id', () => {
      const roomChannel = [];
      const actionMock = { type: '' };
      const gameData = 'sad';
      const parsedGameData: IGameData = {
        roomId: '123',
        gameType: 'asdasd',
        playWith: 'Bot',
      };
      const login = 'login';
      testSaga(roomChannelSaga, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .call([localStorage, 'getItem'], LS.gameOptions)
        .next(gameData)
        .call([JSON, 'parse'], gameData)
        .next(parsedGameData)
        .put(setIsGameEnd(false))
        .next()
        .put(clearFields())
        .next()
        .call(
          [stompClient, 'send'],
          SERVER.joinRoom,
          {},
          JSON.stringify({
            guestLogin: parsedGameData.playWith,
            id: parsedGameData.roomId,
          }),
        )
        .next()
        .put(setTurn(true))
        .next()
        .call(createRoomChanel)
        .next(roomChannel)
        .take(roomChannel)
        .next(actionMock)
        .put(actionMock)
        .next();
    });
    it('should call roomChannelSaga without error without id !bot', () => {
      const roomChannel = [];
      const actionMock = { type: '' };
      const gameData = 'sad';
      const parsedGameData: IGameData = {
        roomId: '123',
        gameType: 'asdasd',
        playWith: 'User',
      };
      const login = 'login';
      testSaga(roomChannelSaga, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .call([localStorage, 'getItem'], LS.gameOptions)
        .next(gameData)
        .call([JSON, 'parse'], gameData)
        .next(parsedGameData)
        .put(setIsGameEnd(false))
        .next()
        .put(clearFields())
        .next()
        .call(
          [stompClient, 'send'],
          SERVER.joinRoom,
          {},
          JSON.stringify({
            guestLogin: login,
            id: parsedGameData.roomId,
          }),
        )
        .next()
        .put(setTurn(false))
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
          id: parsedGameData.roomId,
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
          { uuid: parsedGameData.roomId },
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
            id: parsedGameData.roomId,
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
          field: ['12'],
          winner: 'aasd',
          stepDto: {
            login: 'string',
            step: 'string',
            time: 12312321,
            id: 'string',
          },
        },
        type: AT.SET_STEP_HISTORY,
      };
    });
    it('should call stepHistory without error & win', () => {
      const login = 'aasd';
      testSaga(stepHistory, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .put(setTurn(true))
        .next()
        .put(setSquares(action.payload.field))
        .next()
        .put(setIsGameEnd(true))
        .next()
        .put(clearFields())
        .next()
        .put(setWinner('you_win'))
        .next()
        .isDone();
    });
    it('should call stepHistory without error & player is loose', () => {
      const login = 'aasssd';
      testSaga(stepHistory, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .put(setTurn(true))
        .next()
        .put(setSquares(action.payload.field))
        .next()
        .put(setIsGameEnd(true))
        .next()
        .put(clearFields())
        .next()
        .put(setWinner('you_loose'))
        .next()
        .isDone();
    });
    it('should call stepHistory without error & draw', () => {
      const login = 'aasssd';
      action.payload.winner = null;
      testSaga(stepHistory, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .put(setTurn(true))
        .next()
        .put(setSquares(action.payload.field))
        .next()
        .put(setIsGameEnd(true))
        .next()
        .put(clearFields())
        .next()
        .put(setWinner('draw'))
        .next()
        .isDone();
    });
    it('should call stepHistory without error & !winner', () => {
      const login = 'aasssd';
      action.payload.winner = undefined;
      testSaga(stepHistory, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .put(setTurn(true))
        .next()
        .put(setSquares(action.payload.field))
        .next()
        .isDone();
    });
    it('should call stepHistory without error & no field winner', () => {
      action.payload.winner = 'aasdd';
      const login = 'string';
      testSaga(stepHistory, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .put(setSquares(action.payload.field))
        .next()
        .put(setIsGameEnd(true))
        .next()
        .put(clearFields())
        .next()
        .put(setWinner('you_loose'))
        .next()
        .isDone();
    });
    it('should call stepHistory without error & no field', () => {
      action.payload.field = null;
      const login = 'string';
      testSaga(stepHistory, action)
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(login)
        .put(setIsGameEnd(true))
        .next()
        .put(clearFields())
        .next()
        .put(setWinner('you_loose'))
        .next()
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
  describe('withOpponentGameSaga', () => {
    let action: any;
    beforeEach(() => {
      action = {
        payload: {
          square: 3,
        },
        type: AT.STEP_WITH_OPPONENT,
      };
    });
    it('should call withOpponentGameSaga without error & win', () => {
      const login = 'aasd';
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
        gameType: GAME_TYPE.TIC_TAC_TOE,
        stepDto: {
          login,
          step: action.payload.square.toString(),
          time: mockDate,
          id: parsedGameData.roomId,
        },
      };
      testSaga(withOpponentGameSaga, action)
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
          { uuid: parsedGameData.roomId },
          JSON.stringify(stepBody),
        )
        .next()
        .put(doStep(action.payload.square))
        .next()
        .put(setTurn(false))
        .next()
        .isDone();
      spy.mockRestore();
    });
    it('should call withOpponentGameSaga with error', () => {
      testSaga(withOpponentGameSaga, action)
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
