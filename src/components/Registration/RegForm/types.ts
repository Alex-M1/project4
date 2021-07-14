import { Dispatch } from 'react';
import { TCredentialsAction } from 'store/user/types';

export interface IRegIndex {
  type: 'login' | 'password' | 'confirm';
}

export interface IRegIpt extends IRegIndex {
  value: string;
  onChange: (value: string) => void;
}
export type TDispatch = Dispatch<TCredentialsAction>
