import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as Actions from './actions';

export type TStepHistory = Array<string> | string

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
export interface IStepHistory {
  winner: string
}

export type TActions = typeof Actions
export type TReducer = Reducer<ITicTac, ActionType<TActions>>
