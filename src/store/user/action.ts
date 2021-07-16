import { action } from 'typesafe-actions';
import { TPage, IInputValue } from './types';
import { ActionTypes as AT } from './actionTypes';

export const setIsRedirect = (payload: boolean) => action(AT.SET_IS_REDIRECT, payload);
export const signUpRequest = () => action(AT.SIGN_UP_REQUEST);
export const signInRequest = () => action(AT.SIGN_IN_REQUEST);
export const clearUserFields = (payload: TPage) => action(AT.CLEAR_USER_FIELDS, payload);
export const setCredentialsValue = (payload: IInputValue) => {
  return action(AT.SET_CREDENTIALS_VALUE, payload);
};
