import { ActionType } from 'typesafe-actions';
import { Reducer } from 'redux';
import * as Actions from './action';

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
export type TPage = 'auth' | 'registration';
export type TField = 'login' | 'password' | 'confirm';
export interface IGetInputValue {
  page: TPage;
  field: TField;
}
export interface IInputValue extends IGetInputValue {
  value: string
}

export type TAction = typeof Actions
export type TReducer = Reducer<ICredential, ActionType<TAction>>
