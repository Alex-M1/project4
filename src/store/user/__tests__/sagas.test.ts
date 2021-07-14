import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { cookieMaster } from 'helpers/cookieMaster';
import { notifications } from 'helpers/notification';
import { url } from 'constants/urls';
import { request } from 'helpers/requests';
import { isInvalid } from 'helpers/validation';
import { clearUserFields, setIsRedirect } from '../action';
import userWatcher, { signUpSaga, signInSaga } from '../sagas';
import { ActionTypes as AT } from '../actionTypes';
import { getAuthData, getRegData } from '../selectors';

describe('credentials Saga', () => {
  describe('signUpSaga', () => {
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
        .select(getRegData)
        .next(regValue)
        .call(isInvalid, regValue)
        .next(false)
        .call(request, url.registration, { login: 'login123', password: '11111111' }, 'POST')
        .next()
        .put(setIsRedirect(true))
        .next()
        .put(clearUserFields('registration'))
        .next()
        .call(notifications, { message: 'success_reg', type: 'success' })
        .next()
        .isDone();
    });
    it('should call sendSignUp without error and valid false', () => {
      //@ts-ignore
      testSaga(signUpSaga, action)
        .next()
        .select(getRegData)
        .next(regValue)
        .call(isInvalid, regValue)
        .next('msg')
        .call(notifications, { message: 'msg' })
        .next()
        .isDone();
    });
    it('should call sendSignUp with error user is register', () => {
      //@ts-ignore
      testSaga(signUpSaga, action)
        .next()
        .select(getRegData)
        .next(regValue)
        //@ts-ignore
        .throw('User login123 already exists')
        .call(notifications, { message: 'user_is_reg' })
        .next()
        .isDone();
    });
    it('should call sendSignUp with some error', () => {
      //@ts-ignore
      testSaga(signUpSaga, action)
        .next()
        .select(getRegData)
        .next(regValue)
        //@ts-ignore
        .throw('adasdadaad')
        .call(notifications, { message: 'something_wrong' })
        .next()
        .isDone();
    });
  });
  describe('signInSaga', () => {
    let action: any;
    beforeEach(() => {
      action = {
        type: AT.SIGN_IN_REQUEST,
      };
    });
    const authValue = { login: 'login123', password: '11111111' };
    const mockResponse = { text: jest.fn() };
    const mockToken = 'sadsdasdasd';
    it('should call signInSaga without error', () => {
      //@ts-ignore
      testSaga(signInSaga, action)
        .next()
        .select(getAuthData)
        .next(authValue)
        .call(isInvalid, authValue)
        .next(false)
        .call(request, url.auth, authValue, 'POST')
        .next(mockResponse)
        .call([mockResponse, 'text'])
        .next(mockToken)
        .call([cookieMaster, 'setTokenInCookie'], mockToken)
        .next()
        .put(setIsRedirect(true))
        .next()
        .put(clearUserFields('auth'))
        .next()
        .isDone();
    });
    it('should call sendSignIn without error and valid false', () => {
      //@ts-ignore
      testSaga(signInSaga, action)
        .next()
        .select(getAuthData)
        .next(authValue)
        .call(isInvalid, authValue)
        .next('msg')
        .call(notifications, { message: 'msg' })
        .next()
        .isDone();
    });
    it('should call sendSignIn with error user is register', () => {
      //@ts-ignore
      testSaga(signInSaga, action)
        .next()
        .select(getAuthData)
        .next(authValue)
        //@ts-ignore
        .throw('Incorrect credentials')
        .call(notifications, { message: 'incorrect_cred' })
        .next()
        .isDone();
    });
    it('should call sendSignIn with some error', () => {
      //@ts-ignore
      testSaga(signInSaga, action)
        .next()
        .select(getAuthData)
        .next(authValue)
        //@ts-ignore
        .throw('asdasdaфіsd')
        .call(notifications, { message: 'something_wrong' })
        .next()
        .isDone();
    });
  });
  describe('fork', () => {
    it('should fork watchers', () => {
      expectSaga(userWatcher)
        .put({ type: 'FORKED' })
        .run();
    });
  });
});
