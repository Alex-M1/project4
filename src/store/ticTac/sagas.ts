import { SagaIterator } from '@redux-saga/types';
import { LOCAL_STORAGE as LS } from 'constants/constants';
import { SERVER as S, SERVER } from 'constants/urls';
import { takeEvery, call, put, take } from 'redux-saga/effects';
import { IGameData } from 'src/components/_common_/types/constantsTypes';
import { notifications } from 'src/helpers/notification';
import { createRoomChanel, stompClient } from 'src/helpers/stompClient';
import { doBotStep, doStep, setIsGameEnd, setStepHistory, stepWithBot } from './actions';
import { ActionTypes as AT } from './actionTypes';

export function* roomChannelSaga(): SagaIterator {
  try {
    yield put(setIsGameEnd(false));
    const options = yield call([localStorage, 'getItem'], LS.gameOptions);
    const parseOption: IGameData = yield call([JSON, 'parse'], options);
    yield call(
      [stompClient, 'send'],
      SERVER.joinRoom,
      {},
      JSON.stringify({
        id: parseOption.roomId,
        guestLogin: parseOption.playWith,
      }),
    );
    const roomChannel = yield call(createRoomChanel);
    while (true) {
      const action = yield take(roomChannel);
      yield put(action);
    }
  } catch (err) {
    yield call(notifications, { message: 'something_wrong' });
  }
}

export function* withBotGameSaga({ payload }: ReturnType<typeof stepWithBot>): SagaIterator {
  try {
    const login = yield call([localStorage, 'getItem'], LS.login);
    const gameData = yield call([localStorage, 'getItem'], LS.gameOptions);
    const parsedGameData: IGameData = yield call([JSON, 'parse'], gameData);
    const stepBody = {
      gameType: parsedGameData.gameType,
      stepDto: {
        login,
        step: payload.square.toString(),
        time: Date.now(),
        id: parsedGameData.roomId,
      },
    };
    yield call([stompClient, 'send'], S.doStep, { uuid: parsedGameData.roomId }, JSON.stringify(stepBody));
    yield put(doStep(payload.square));
    yield call(
      [stompClient, 'send'],
      S.getBotStep,
      {},
      JSON.stringify({ id: parsedGameData.roomId, gameType: parsedGameData.gameType }),
    );
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
        step: payload.toString(),
        time: Date.now(),
        id: parsedGameData.roomId,
      },
    };
    yield call([stompClient, 'send'], S.doStep, { uuid: parsedGameData.roomId }, JSON.stringify(stepBody));
    yield put(doStep(payload));
  } catch (err) {
    yield call(notifications, { message: 'something_wrong' });
  }
}

export function* stepHistory({ payload }: ReturnType<typeof setStepHistory>): SagaIterator {
  try {
    const login = yield call([localStorage, 'getItem'], LS.login);
    if (payload.winner) {
      yield put(setIsGameEnd(true));
      payload.winner === login
        ? yield call(notifications, { message: 'you_win', type: 'info' })
        : yield call(notifications, { message: 'you_loose', type: 'warn' });
    }
  } catch (err) {
    yield call(notifications, { message: 'something_wrong' });
  }
}

export default function* ticTacWatcher() {
  yield takeEvery(AT.DO_BOT_STEP, doBotStepSaga);
  yield takeEvery(AT.SET_STEP_HISTORY, stepHistory);
  yield takeEvery(AT.STEP_WITH_BOT, withBotGameSaga);
  yield takeEvery(AT.CREATE_ROOM_CHANNEL, roomChannelSaga);
}
