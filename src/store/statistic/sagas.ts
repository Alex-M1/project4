import { LOCAL_STORAGE } from 'constants/constants';
import { SERVER } from 'constants/urls';
import { call, put, takeEvery } from 'redux-saga/effects';
import { cookieMaster } from 'src/helpers/cookieMaster';
import { request } from 'src/helpers/requests';
import { setStatistic } from './action';
import { ActionTypes as AT } from './actionTypes';

export function* getStatisticSaga() {
  try {
    const token = yield call([cookieMaster, 'getCookie'], LOCAL_STORAGE.token);
    const username = yield call([localStorage, 'getItem'], LOCAL_STORAGE.login);
    const statisticBody = {
      username,
    };

    const response = yield call(request, SERVER.statisticByUsername, statisticBody, 'POST', token);
    const statistic = yield call([response, 'json']);
    yield put(setStatistic(statistic));
  } catch (e) {
    console.log(e);
  }
}

export default function* statisticWatcher() {
  yield takeEvery(AT.GET_GAME_STATISTIC, getStatisticSaga);
}
