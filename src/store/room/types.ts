import { ActionType } from 'typesafe-actions';
import { Reducer } from 'redux';
import * as Actions from './actions';

export interface IRoom {
  id: string;
  creatorLogin: string;
  gameType: string;
}

export interface IInitialState {
  rooms: Array<IRoom>;
  gameType: string;
  myOpponentGame: {
    id: string;
    guestLogin: string;
    startTime: number;
    gameType: string;
    stepDtoList: string[];
  };
}

export type TAction = typeof Actions
export type TReducer = Reducer<IInitialState, ActionType<TAction>>
