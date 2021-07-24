import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as Actions from './actions';

export interface ITicTac {
  squares: string[] | null;
  steps: {
    count: number;
    isUserStep: boolean;
  };
  isGameEnd: boolean
}

export interface IPlayWithBot {
  square: number
}

export type TActions = typeof Actions
export type TReducer = Reducer<ITicTac, ActionType<TActions>>
