import { Dispatch } from 'react';
import { TCredentialsAction } from 'store/user/types';

export interface IAuthIndex {
  type: 'login' | 'password' | 'confirm';
  page?: 'auth' | 'registration';
}

export type TDispatch = Dispatch<TCredentialsAction>

export interface IAuthIpt extends IAuthIndex {
  value: string;
  onChange: (value: string) => void;
}
