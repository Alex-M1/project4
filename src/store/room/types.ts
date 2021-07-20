import { ActionType } from 'typesafe-actions';
import { Reducer } from 'redux';
import * as Actions from './action';

export interface IRoom {
  id: number;
  loginName: string;
  gameType: string;
}

export interface IInitialState {
  rooms: IRoom[];
  gameType: string;
}

export type TAction = typeof Actions
export type TReducer = Reducer<IInitialState, ActionType<TAction>>
