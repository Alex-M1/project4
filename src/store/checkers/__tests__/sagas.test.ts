import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { notifications } from 'helpers/notification';
import { SERVER } from 'constants/urls';
import { LOCAL_STORAGE as LS } from 'constants/constants';
import { stompClient, createCheckerChannel } from 'src/helpers/stompClient';
import { IGameData } from 'common/types/constantsTypes';
import watcherCheckers, { checkerChannelSaga, chooseCellSaga, doStepSaga, doBotStepSaga } from '../sagas';
import { ActionTypes as AT } from '../actionTypes';
import { setPossibleSteps } from '../actions';
import { getCurrentCell } from '../selectors';

jest.mock('src/helpers/stompClient', () => ({
  createCheckerChannel: jest.fn(),
  stompClient: {
    send: jest.fn(),
  },
}));

describe('CheckerSagas', () => {
  describe('checkerChannelSaga', () => {
    let action: any;
    beforeEach(() => {
      action = {
        type: AT.CONNECT_CHECKERS_CHANNEL,
      };
    });
    it('should call checkerChannelSaga without error', () => {
      const mockOptions = '{sda}';
      const mockData = { roomId: '123', playWith: 'Bot' };
      const roomChannel = [];
      const actionMock = { type: '' };
      testSaga(checkerChannelSaga, action)
        .next()
        .call([localStorage, 'getItem'], LS.gameOptions)
        .next(mockOptions)
        .call([JSON, 'parse'], mockOptions)
        .next(mockData)
        .call(
          [stompClient, 'send'],
          SERVER.joinRoom,
          {},
          JSON.stringify({
            id: mockData.roomId,
            guestLogin: mockData.playWith,
          }),
        )
        .next()
        .call(createCheckerChannel)
        .next(roomChannel)
        .take(roomChannel)
        .next(actionMock)
        .put(actionMock)
        .next();
    });
    it('should call workerConnection with error', () => {
      testSaga(checkerChannelSaga, action)
        .next()
        .throw(new Error())
        .call(notifications, { message: 'something_wrong' })
        .next()
        .isDone();
    });
  });
  describe('chooseCellSaga', () => {
    let action: any;
    beforeEach(() => {
      action = {
        payload: 25,
        type: AT.CHOOSE_CELL,
      };
    });
    it('should call chooseCellSaga without error', () => {
      const mockLogin = 'asdasd';
      const mockOptions = '{sda}';
      const mockData: IGameData = { roomId: '123', playWith: 'Bot', gameType: 'Checker' };
      const mockDate = 123213;
      const spy = jest
        .spyOn(Date, 'now')
        .mockImplementation(() => mockDate);
      const stepBody = {
        gameType: mockData.gameType,
        stepDto: {
          login: mockLogin,
          step: action.payload,
          time: mockDate,
          id: mockData.roomId,
        },
      };
      testSaga(chooseCellSaga, action)
        .next()
        .put(setPossibleSteps([]))
        .next()
        .call([localStorage, 'getItem'], LS.login)
        .next(mockLogin)
        .call([localStorage, 'getItem'], LS.gameOptions)
        .next(mockOptions)
        .call([JSON, 'parse'], mockOptions)
        .next(mockData)
        .call(
          [stompClient, 'send'],
          SERVER.getPossibleSteps,
          { uuid: mockData.roomId },
          JSON.stringify(stepBody),
        )
        .next()
        .isDone();
      spy.mockRestore();
    });
    it('should call workerConnection with error', () => {
      testSaga(chooseCellSaga, action)
        .next()
        .throw(new Error())
        .call(notifications, { message: 'something_wrong' })
        .next()
        .isDone();
    });
  });

  describe('doStepSaga', () => {
    let action: any;
    beforeEach(() => {
      action = {
        payload: 25,
        type: AT.DO_STEP,
      };
    });
    it('should call doStepSaga without error play with user', () => {
      const currentCell = 20;
      const mockLogin = 'asdasd';
      const mockOptions = '{sda}';
      const mockData: IGameData = { roomId: '123', playWith: 'adas', gameType: 'Checker' };
      const mockDate = 123213;
      const spy = jest
        .spyOn(Date, 'now')
        .mockImplementation(() => mockDate);
      const stepBody = {
        gameType: mockData.gameType,
        stepDto: {
          login: mockLogin,
          step: `${currentCell}_${action.payload}`,
          time: mockDate,
          id: mockData.roomId,
        },
      };
      testSaga(doStepSaga, action)
        .next()
        .select(getCurrentCell)
        .next(currentCell)
        .call([localStorage, 'getItem'], LS.login)
        .next(mockLogin)
        .call([localStorage, 'getItem'], LS.gameOptions)
        .next(mockOptions)
        .call([JSON, 'parse'], mockOptions)
        .next(mockData)
        .call(
          [stompClient, 'send'],
          SERVER.doStep,
          { uuid: mockData.roomId },
          JSON.stringify(stepBody),
        )
        .next()
        .put(setPossibleSteps([]))
        .next()
        .isDone();
      spy.mockRestore();
    });
    it('should call doStepSaga without error play with Bot', () => {
      const currentCell = 20;
      const mockLogin = 'asdasd';
      const mockOptions = '{sda}';
      const mockData: IGameData = { roomId: '123', playWith: 'Bot', gameType: 'Checker' };
      const mockDate = 123213;
      const spy = jest
        .spyOn(Date, 'now')
        .mockImplementation(() => mockDate);
      const stepBody = {
        gameType: mockData.gameType,
        stepDto: {
          login: mockLogin,
          step: `${currentCell}_${action.payload}`,
          time: mockDate,
          id: mockData.roomId,
        },
      };
      testSaga(doStepSaga, action)
        .next()
        .select(getCurrentCell)
        .next(currentCell)
        .call([localStorage, 'getItem'], LS.login)
        .next(mockLogin)
        .call([localStorage, 'getItem'], LS.gameOptions)
        .next(mockOptions)
        .call([JSON, 'parse'], mockOptions)
        .next(mockData)
        .call(
          [stompClient, 'send'],
          SERVER.doStep,
          { uuid: mockData.roomId },
          JSON.stringify(stepBody),
        )
        .next()
        .put(setPossibleSteps([]))
        .next()
        .call(
          [stompClient, 'send'],
          SERVER.getBotStep,
          { uuid: mockData.roomId },
          JSON.stringify({
            id: mockData.roomId,
            gameType: mockData.gameType,
          }),
        )
        .next()
        .isDone();
      spy.mockRestore();
    });
    it('should call workerConnection with error', () => {
      testSaga(doStepSaga, action)
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
        payload: '25_30',
        type: AT.DO_BOT_STEP,
      };
    });
    it('should call doBotStepSaga without error', () => {
      const mockOptions = '{sda}';
      const mockData: IGameData = { roomId: '123', playWith: 'Bot', gameType: 'Checker' };
      const mockDate = 123213;
      const spy = jest
        .spyOn(Date, 'now')
        .mockImplementation(() => mockDate);
      const stepBody = {
        gameType: mockData.gameType,
        stepDto: {
          login: mockData.playWith,
          step: action.payload,
          time: mockDate,
          id: mockData.roomId,
        },
      };
      testSaga(doBotStepSaga, action)
        .next()
        .call([localStorage, 'getItem'], LS.gameOptions)
        .next(mockOptions)
        .call([JSON, 'parse'], mockOptions)
        .next(mockData)
        .call(
          [stompClient, 'send'],
          SERVER.doStep,
          { uuid: mockData.roomId },
          JSON.stringify(stepBody),
        )
        .next()
        .isDone();
      spy.mockRestore();
    });
    it('should call workerConnection with error', () => {
      testSaga(doBotStepSaga, action)
        .next()
        .throw(new Error())
        .call(notifications, { message: 'something_wrong' })
        .next()
        .isDone();
    });
  });
  describe('fork', () => {
    it('should fork watchers', () => {
      expectSaga(watcherCheckers)
        .put({ type: 'FORKED' })
        .run();
    });
  });
});
