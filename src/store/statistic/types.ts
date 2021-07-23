import { ActionType } from 'typesafe-actions';
import { Reducer } from 'redux';
import * as Actions from './action';

export interface IStatUUID {
  creatorLogin: string;
  gameType: string;
  id: string;
}

export interface IInitialState {
  statistic: Array<IStatUUID>;
}

export type TAction = typeof Actions
export type TReducer = Reducer<IInitialState, ActionType<TAction>>
