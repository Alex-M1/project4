import { SagaIterator } from '@redux-saga/types';
import { GAME_SETTINGS, GAME_TYPE, LOCAL_STORAGE as LS } from 'constants/constants';
import { SERVER as S, SERVER } from 'constants/urls';
import { takeEvery, call, put, take, delay } from 'redux-saga/effects';
import { IGameData } from 'common/types/constantsTypes';
import { notifications } from 'src/helpers/notification';
import { createRoomChanel, stompClient } from 'src/helpers/stompClient';
import {
  doStep,
  setTurn,
  doBotStep,
  setSquares,
  clearFields,
  stepWithBot,
  setIsGameEnd,
  setStepHistory,
  createRoomChanel as roomChannel,
  setWinner,
} from './actions';
import { ActionTypes as AT } from './actionTypes';

export function* roomChannelSaga({ payload }: ReturnType<typeof roomChannel>): SagaIterator {
  try {
    const { myOpponentGame } = payload;
    const myLogin = yield call([localStorage, 'getItem'], LS.login);
    const gameData = yield call([localStorage, 'getItem'], LS.gameOptions);
    const parsedGameData: IGameData = yield call([JSON, 'parse'], gameData);
    yield put(setIsGameEnd(false));
    yield put(clearFields());
    console.log(myOpponentGame);
    if (!myOpponentGame.id) {
      console.log({
        guestLogin: parsedGameData.playWith === GAME_SETTINGS.bot ? GAME_SETTINGS.bot : myLogin,
        id: parsedGameData.roomId,
      });
      yield call(
        [stompClient, 'send'],
        SERVER.joinRoom,
        {},
        JSON.stringify({
          guestLogin: parsedGameData.playWith === GAME_SETTINGS.bot ? GAME_SETTINGS.bot : myLogin,
          id: parsedGameData.roomId,
        }),
      );
      yield put(setTurn(parsedGameData.playWith === GAME_SETTINGS.bot));
      const roomChannel = yield call(createRoomChanel);
      while (true) {
        const action = yield take(roomChannel);
        yield put(action);
      }
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

export function* withOpponentGameSaga({ payload }: ReturnType<typeof stepWithBot>): SagaIterator {
  try {
    const login = yield call([localStorage, 'getItem'], LS.login);
    const gameData = yield call([localStorage, 'getItem'], LS.gameOptions);
    const parsedGameData: IGameData = yield call([JSON, 'parse'], gameData);
    const stepBody = {
      gameType: GAME_TYPE.TIC_TAC_TOE,
      stepDto: {
        login,
        step: payload.square.toString(),
        time: Date.now(),
        id: parsedGameData.roomId,
      },
    };
    yield call([stompClient, 'send'], S.doStep, { uuid: parsedGameData.roomId }, JSON.stringify(stepBody));
    yield put(doStep(payload.square));
    yield put(setTurn(false));
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
        login: GAME_SETTINGS.bot,
        step: payload.toString(),
        time: Date.now(),
        id: parsedGameData.roomId,
      },
    };
    yield call([stompClient, 'send'], S.doStep, { uuid: parsedGameData.roomId }, JSON.stringify(stepBody));
    yield delay(350);
  } catch (err) {
    yield call(notifications, { message: 'something_wrong' });
  }
}

export function* stepHistory({ payload }: ReturnType<typeof setStepHistory>): SagaIterator {
  try {
    const login = yield call([localStorage, 'getItem'], LS.login);
    const { field, stepDto, winner } = payload;
    if (field) {
      if (stepDto.login !== login) {
        yield put(setTurn(true));
      }
      yield put(setSquares(field));
    }

    if (winner !== undefined) {
      yield put(setIsGameEnd(true));
      yield put(clearFields());

      winner === null
        ? yield put(setWinner('draw'))
        : winner === login
          ? yield put(setWinner('you_win'))
          : yield put(setWinner('you_loose'));
    }
  } catch (err) {
    yield call(notifications, { message: 'something_wrong' });
  }
}

export default function* ticTacWatcher() {
  yield takeEvery(AT.STEP_WITH_BOT, withBotGameSaga);
  yield takeEvery(AT.STEP_WITH_OPPONENT, withOpponentGameSaga);
  yield takeEvery(AT.CREATE_ROOM_CHANNEL, roomChannelSaga);
  yield takeEvery(AT.DO_BOT_STEP, doBotStepSaga);
  yield takeEvery(AT.SET_STEP_HISTORY, stepHistory);
}
