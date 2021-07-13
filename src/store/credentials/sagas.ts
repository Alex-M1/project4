import { takeEvery, select } from 'redux-saga/effects';
import * as AT from './actionTypes';
import { auth, registration } from './selectors';

export function* signUpSaga() {
  try {
    const body = yield select(registration);
    console.log(body);
  } catch (err) {
    console.log(err);
  }
}

export function* signInSaga() {
  try {
    const body = yield select(auth);
    console.log(body);
  } catch (err) {
    console.log(err);
  }
}
export function* credentialsWatcher() {
  yield takeEvery(AT.SIGN_UP_REQUEST, signUpSaga);
  yield takeEvery(AT.SIGN_IN_REQUEST, signInSaga);
}
