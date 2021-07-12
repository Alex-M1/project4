import { TCredentialsAction } from 'store/credentials/types';
import { Dispatch } from 'react';

export interface IAuthIndex {
  type: 'login' | 'password' | 'confirm';
  page?: 'auth' | 'registration';
}

export type TDispatch = Dispatch<TCredentialsAction>

export interface IAuthIpt extends IAuthIndex {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}
