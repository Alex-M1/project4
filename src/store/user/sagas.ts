import { url } from 'constants/urls';
import { SagaIterator } from 'redux-saga';
import { takeEvery, select, call, put } from 'redux-saga/effects';
import { notifications } from 'src/helpers/notification';
import { request } from 'src/helpers/requests';
import { isInvalid } from 'src/helpers/validation';
import { cookieMaster } from '../../helpers/cookieMaster';
import { clearUserFields, setIsRedirect } from './action';
import { ActionTypes as AT } from './actionTypes';
import { getRegData, getAuthData } from './selectors';

export function* signUpSaga(): SagaIterator {
  const regData = yield select(getRegData);
  try {
    const valid = yield call(isInvalid, regData);
    if (valid) return yield call(notifications, { message: valid });
    const { confirm, ...newRegData } = regData;
    yield call(request, url.registration, newRegData, 'POST');
    yield put(setIsRedirect(true));
    yield put(clearUserFields('registration'));
    yield call(notifications, { message: 'success_reg', type: 'success' });
  } catch (err) {
    if (err === `User ${regData.login} already exists`) {
      return yield call(notifications, { message: 'user_is_reg' });
    }
    yield call(notifications, { message: 'something_wrong' });
  }
}

export function* signInSaga() {
  const authData = yield select(getAuthData);
  try {
    const valid = yield call(isInvalid, authData);
    if (valid) return yield call(notifications, { message: valid });
    const response = yield call(request, url.auth, authData, 'POST');
    const token: string = yield call([response, 'text']);
    yield call([cookieMaster, 'setTokenInCookie'], token);
    yield put(setIsRedirect(true));
    yield put(clearUserFields('auth'));
  } catch (err) {
    if (err === 'Incorrect credentials' || err === `User ${authData.login} was not found`) {
      return yield call(notifications, { message: 'incorrect_cred' });
    }
    yield call(notifications, { message: 'something_wrong' });
  }
}

export default function* userWatcher() {
  yield takeEvery(AT.SIGN_UP_REQUEST, signUpSaga);
  yield takeEvery(AT.SIGN_IN_REQUEST, signInSaga);
}
