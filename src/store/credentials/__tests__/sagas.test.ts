import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { notifications } from '../../../helpers/notification';
import { clearIpt, setIsRedirect } from '../action';
import { url } from '../../../constants/urls';
import { request } from '../../../helpers/requests';
import { validate } from '../../../helpers/validation';
import { signUpSaga, credentialsWatcher } from '../sagas';
import { ActionTypes as AT } from '../actionTypes';
import { registration } from '../selectors';

describe('authSagas', () => {
  describe('workerRegistration', () => {
    let action: any;

    beforeEach(() => {
      action = {
        type: AT.SIGN_UP_REQUEST,
      };
    });
    const regValue = { login: 'login123', password: '11111111', confirm: '111111111' };
    it('should call sendSignUp without error', () => {
      //@ts-ignore
      testSaga(signUpSaga, action)
        .next()
        .select(registration)
        .next(regValue)
        .call(validate, regValue)
        .next(false)
        .call(request, url.registration, { login: 'login123', password: '11111111' }, 'POST')
        .next()
        .put(setIsRedirect(true))
        .next()
        .put(clearIpt('registration'))
        .next()
        .call(notifications, { message: 'successReg', type: 'success' })
        .next()
        .isDone();
    });
  });
  describe('fork', () => {
    it('should fork watchers', () => {
      expectSaga(credentialsWatcher)
        .put({ type: 'FORKED' })
        .run();
    });
  });
});
