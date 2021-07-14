import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { cookieMaster } from '../../../helpers/cookieMaster';
import { notifications } from '../../../helpers/notification';
import { clearIpt, setIsRedirect } from '../action';
import { url } from '../../../constants/urls';
import { request } from '../../../helpers/requests';
import { validate } from '../../../helpers/validation';
import { signUpSaga, credentialsWatcher, signInSaga } from '../sagas';
import { ActionTypes as AT } from '../actionTypes';
import { auth, registration } from '../selectors';

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
    it('should call sendSignUp without error and valid false', () => {
      //@ts-ignore
      testSaga(signUpSaga, action)
        .next()
        .select(registration)
        .next(regValue)
        .call(validate, regValue)
        .next('msg')
        .call(notifications, { message: 'msg' })
        .next()
        .isDone();
    });
    it('should call sendSignUp with error user is register', () => {
      //@ts-ignore
      testSaga(signUpSaga, action)
        .next()
        .select(registration)
        .next(regValue)
        //@ts-ignore
        .throw('User login123 already exists')
        .call(notifications, { message: 'userIsReg' })
        .next()
        .isDone();
    });
    it('should call sendSignUp with some error', () => {
      //@ts-ignore
      testSaga(signUpSaga, action)
        .next()
        .select(registration)
        .next(regValue)
        //@ts-ignore
        .throw('adasdadaad')
        .call(notifications, { message: 'somethingWrong' })
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
        .select(auth)
        .next(authValue)
        .call(validate, authValue)
        .next(false)
        .call(request, url.auth, authValue, 'POST')
        .next(mockResponse)
        .call([mockResponse, 'text'])
        .next(mockToken)
        .call([cookieMaster, 'setTokenInCookie'], mockToken)
        .next()
        .put(setIsRedirect(true))
        .next()
        .put(clearIpt('auth'))
        .next()
        .isDone();
    });
    it('should call sendSignIn without error and valid false', () => {
      //@ts-ignore
      testSaga(signInSaga, action)
        .next()
        .select(auth)
        .next(authValue)
        .call(validate, authValue)
        .next('msg')
        .call(notifications, { message: 'msg' })
        .next()
        .isDone();
    });
    it('should call sendSignIn with error user is register', () => {
      //@ts-ignore
      testSaga(signInSaga, action)
        .next()
        .select(auth)
        .next(authValue)
        //@ts-ignore
        .throw('Incorrect credentials')
        .call(notifications, { message: 'inCorrectCred' })
        .next()
        .isDone();
    });
    it('should call sendSignIn with some error', () => {
      //@ts-ignore
      testSaga(signInSaga, action)
        .next()
        .select(auth)
        .next(authValue)
        //@ts-ignore
        .throw('asdasdaфіsd')
        .call(notifications, { message: 'somethingWrong' })
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
