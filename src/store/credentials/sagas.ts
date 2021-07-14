import { url } from 'constants/urls';
import { SagaIterator } from 'redux-saga';
import { takeEvery, select, call, put } from 'redux-saga/effects';
import { notifications } from 'src/helpers/notification';
import { request } from 'src/helpers/requests';
import { validate } from 'src/helpers/validation';
import { cookieMaster } from '../../helpers/cookieMaster';
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
  const body = yield select(auth);
  try {
    const valid = yield call(validate, body);
    if (valid) return yield call(notifications, { message: valid });
    const response = yield call(request, url.auth, body, 'POST');
    const token: string = yield call([response, 'text']);
    yield call([cookieMaster, 'setTokenInCookie'], token);
    yield put(setIsRedirect(true));
    yield put(clearIpt('auth'));
  } catch (err) {
    if (err === 'Incorrect credentials' || err === `User ${body.login} was not found`) {
      return yield call(notifications, { message: 'inCorrectCred' });
    }
    yield call(notifications, { message: 'somethingWrong' });
  }
}

export function* credentialsWatcher() {
  yield takeEvery(AT.SIGN_UP_REQUEST, signUpSaga);
  yield takeEvery(AT.SIGN_IN_REQUEST, signInSaga);
}
