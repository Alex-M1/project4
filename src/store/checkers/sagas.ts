import { GAME_SETTINGS, LOCAL_STORAGE as LS } from 'constants/constants';
import { SERVER } from 'constants/urls';
import { SagaIterator } from 'redux-saga';
import { call, put, select, take, takeEvery } from 'redux-saga/effects';
import { IGameData } from 'src/components/_common_/types/constantsTypes';
import { notifications } from 'src/helpers/notification';
import { createCheckerChannel, stompClient } from 'src/helpers/stompClient';
import { chooseCell, doBotStep, doStep, setPossibleSteps } from './actions';
import { ActionTypes as AT } from './actionTypes';
import { getCurrentCell } from './selectors';

export function* checkerChannelSaga(): SagaIterator {
  try {
    const option = yield call([localStorage, 'getItem'], LS.gameOptions);
    const parseOption: IGameData = yield call([JSON, 'parse'], option);
    yield call(
      [stompClient, 'send'],
      SERVER.joinRoom,
      {},
      JSON.stringify({
        id: parseOption.roomId,
        guestLogin: parseOption.playWith,
      }),
    );
    const checkerChannel = yield call(createCheckerChannel);
    while (true) {
      const action = yield take(checkerChannel);
      yield put(action);
    }
  } catch (err) {
    yield call(notifications, { message: 'something_wrong' });
  }
}

export function* chooseCellSaga({ payload }: ReturnType<typeof chooseCell>) {
  try {
    yield put(setPossibleSteps([]));
    const login = yield call([localStorage, 'getItem'], LS.login);
    const gameData = yield call([localStorage, 'getItem'], LS.gameOptions);
    const parsedGameData: IGameData = yield call([JSON, 'parse'], gameData);
    const stepBody = {
      gameType: parsedGameData.gameType,
      stepDto: {
        login,
        step: payload,
        time: Date.now(),
        id: parsedGameData.roomId,
      },
    };
    yield call(
      [stompClient, 'send'],
      SERVER.getPossibleSteps,
      { uuid: parsedGameData.roomId },
      JSON.stringify(stepBody),
    );
  } catch (err) {
    yield call(notifications, { message: 'something_wrong' });
  }
}

export function* doStepSaga({ payload }: ReturnType<typeof doStep>): SagaIterator {
  try {
    const currentCell = yield select(getCurrentCell);
    const login = yield call([localStorage, 'getItem'], LS.login);
    const gameData = yield call([localStorage, 'getItem'], LS.gameOptions);
    const parsedGameData: IGameData = yield call([JSON, 'parse'], gameData);
    const stepBody = {
      gameType: parsedGameData.gameType,
      stepDto: {
        login,
        step: `${currentCell}_${payload}`,
        time: Date.now(),
        id: parsedGameData.roomId,
      },
    };
    yield call(
      [stompClient, 'send'],
      SERVER.doStep,
      { uuid: parsedGameData.roomId },
      JSON.stringify(stepBody),
    );
    yield put(setPossibleSteps([]));
    if (parsedGameData.playWith === GAME_SETTINGS.bot) {
      yield call(
        [stompClient, 'send'],
        SERVER.getBotStep,
        { uuid: parsedGameData.roomId },
        JSON.stringify({
          id: parsedGameData.roomId,
          gameType: parsedGameData.gameType,
        }),
      );
    }
  } catch (err) {
    yield call(notifications, { message: 'something_wrong' });
  }
}

export function* doBotStepSaga({ payload }: ReturnType<typeof doBotStep>): SagaIterator {
  try {
    const gameData = yield call([localStorage, 'getItem'], LS.gameOptions);
    const parsedGameData: IGameData = yield call([JSON, 'parse'], gameData);
    const stepBody = {
      gameType: parsedGameData.gameType,
      stepDto: {
        login: 'Bot',
        step: payload,
        time: Date.now(),
        id: parsedGameData.roomId,
      },
    };
    yield call(
      [stompClient, 'send'],
      SERVER.doStep,
      { uuid: parsedGameData.roomId },
      JSON.stringify(stepBody),
    );
  } catch (err) {
    yield call(notifications, { message: 'something_wrong' });
  }
}

export default function* checkerWatcher() {
  yield takeEvery(AT.CONNECT_CHECKERS_CHANNEL, checkerChannelSaga);
  yield takeEvery(AT.CHOOSE_CELL, chooseCellSaga);
  yield takeEvery(AT.DO_STEP, doStepSaga);
  yield takeEvery(AT.DO_BOT_STEP, doBotStepSaga);
}
