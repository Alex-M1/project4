import { url } from 'constants/urls';
import { SagaIterator } from 'redux-saga';
import { takeEvery, select, call, put } from 'redux-saga/effects';
import { notifications } from 'src/helpers/notification';
import { request } from 'src/helpers/requests';
import { validate } from 'src/helpers/validation';
import { clearIpt, setIsRedirect } from './action';
import { ActionTypes as AT } from './actionTypes';
import { auth, registration } from './selectors';

export function* signUpSaga(): SagaIterator {
  const body = yield select(registration);
  try {
    const valid = yield call(validate, body);
    if (valid) return yield call(notifications, { message: valid });
    const { confirm, ...newBody } = body;
    yield call(request, url.registration, newBody, 'POST');
    yield put(setIsRedirect(true));
    yield put(clearIpt('registration'));
    yield call(notifications, { message: 'successReg', type: 'success' });
  } catch (err) {
    if (err === `User ${body.login} already exists`) {
      return yield call(notifications, { message: 'userIsReg' });
    }
    yield call(notifications, { message: 'somethingWrong' });
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
