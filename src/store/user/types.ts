import { ActionTypes as AT } from './actionTypes';

export interface IAuth {
  login: string;
  password: string;
}
export interface IRegistration extends IAuth {
  confirm: string;
}

export interface ICredential {
  auth: IAuth;
  registration: IRegistration;
  isRedirect: boolean;
}
export type TPage = 'auth' | 'registration'
export type TField = 'login' | 'password' | 'confirm'
export interface ISetting {
  page: TPage;
  field: TField;
}

export type TSetCredentialsValue = { type: typeof AT.SET_CREDENTIALS_VALUE, setting: ISetting, payload: string };
export type TSignUpRequest = { type: typeof AT.SIGN_UP_REQUEST }
export type TSignInRequest = { type: typeof AT.SIGN_IN_REQUEST }
export type TSetIsRedirect = { type: typeof AT.SET_IS_REDIRECT, isRedirect: boolean }
export type TCleatIUserFields = { type: typeof AT.CLEAR_USER_FIELDS, page: TPage }
export type TCredentialsAction = TSetCredentialsValue | TSignInRequest | TSetIsRedirect | TCleatIUserFields;
