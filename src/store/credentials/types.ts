import * as AT from './actionTypes';

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
}

export interface ISetting {
  page: 'auth' | 'registration';
  field: 'login' | 'password' | 'confirm';
}

export type TSetCredentialsValue = { type: typeof AT.SET_CREDENTIALS_VALUE, setting: ISetting, payload: string };
export type TSignUpRequest = { type: typeof AT.SIGN_UP_REQUEST }
export type TSignInRequest = { type: typeof AT.SIGN_IN_REQUEST }
export type TCredentialsAction = TSetCredentialsValue | TSignInRequest;
