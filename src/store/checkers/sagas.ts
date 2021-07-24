import { LOCAL_STORAGE as LS } from 'constants/constants';
import { SERVER } from 'constants/urls';
import { SagaIterator } from 'redux-saga';
import { call, put, take, takeEvery } from 'redux-saga/effects';
import { IGameData } from 'src/components/_common_/types/constantsTypes';
import { createCheckerChannel, stompClient } from 'src/helpers/stompClient';
import { chooseCell } from './actions';
import { ActionTypes as AT } from './actionTypes';

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
  } catch (err) { console.log(err); }
}

export function* chooseCellSaga({ payload }: ReturnType<typeof chooseCell>) {
  try {
    const login = yield call([localStorage, 'getItem'], LS.login);
    const gameData = yield call([localStorage, 'getItem'], LS.gameOptions);
    const parsedGameData: IGameData = yield call([JSON, 'parse'], gameData);
    const stepBody = {
      gameType: parsedGameData.gameType,
      stepDto: {
        login,
        step: '23_32',
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

    console.log(payload);
  } catch (err) { console.log(err); }
}

export default function* checkerWatcher() {
  yield takeEvery(AT.CONNECT_CHECKERS_CHANNEL, checkerChannelSaga);
  yield takeEvery(AT.CHOOSE_CELL, chooseCellSaga);
}
