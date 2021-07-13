import { TSetCredentialsValue, ISetting, TSignUpRequest, TSignInRequest, TSetIsRedirect, TPage } from './types';
import * as AT from './actionTypes';

export const setCredentialsValue = (setting: ISetting, payload: string): TSetCredentialsValue => ({
  type: AT.SET_CREDENTIALS_VALUE, setting, payload,
});
export const setIsRedirect = (isRedirect: boolean): TSetIsRedirect => ({ type: AT.SET_IS_REDIRECT, isRedirect });
export const signUpRequest = (): TSignUpRequest => ({ type: AT.SIGN_UP_REQUEST });
export const signInRequest = (): TSignInRequest => ({ type: AT.SIGN_IN_REQUEST });
export const cleatIpt = (page: TPage) => ({ type: AT.CLEAR_IPT, page });
