import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as Actions from './actions';

export interface ITicTac {
  squares: string[] | null;
  steps: {
    count: number;
    isUserStep: boolean;
  };
  isGameEnd: boolean;
  isMyTurn: boolean;
  myOpponentGame: {
    id: string;
    guestLogin: string;
    startTime: number;
    gameType: string;
    stepDtoList: string[];
  }
}

export interface IPlayWithBot {
  id: string,
  square: number
}
export interface IPlayWithOpponent {
  id: string,
  square: number
}
export interface IStepHistory {
  winner: string;
  field?: string[];
  stepDto?: {
    login: string;
    step: string;
    time: number;
    id: string;
  }
}

export type TActions = typeof Actions
export type TReducer = Reducer<ITicTac, ActionType<TActions>>
