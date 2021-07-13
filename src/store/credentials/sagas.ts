import { url } from 'constants/urls';
import { takeEvery, select } from 'redux-saga/effects';
import { request } from 'src/helpers/requests';
import * as AT from './actionTypes';
import { registration } from './selectors';

export function* signUpSaga() {
  try {
    const body = yield select(registration);
    request(url.registration, body, 'POST');
    console.log(body);
  } catch (err) {
    console.log(err);
  }
}

export function* credentialsWatcher() {
  yield takeEvery(AT.SIGN_UP_REQUEST, signUpSaga);
}
