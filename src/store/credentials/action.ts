import { TSetCredentialsValue, ISetting, TSignUpRequest, TSignInRequest } from './types';
import * as AT from './actionTypes';

export const setCredentialsValue = (setting: ISetting, payload: string): TSetCredentialsValue => ({
  type: AT.SET_CREDENTIALS_VALUE, setting, payload,
});

export const signUpRequest = (): TSignUpRequest => ({ type: AT.SIGN_UP_REQUEST });

export const signInRequest = (): TSignInRequest => ({ type: AT.SIGN_IN_REQUEST});
