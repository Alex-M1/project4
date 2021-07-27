import { ActionType } from 'typesafe-actions';
import { Reducer } from 'redux';
import * as Actions from './actions';

export interface IRoom {
  id: string;
  creatorLogin: string;
  gameType: string;
}

export interface IStepDtoList {
  login: string;
  step: string;
  time: number;
  id: string;
}

export interface IMyOpponentGame {
    id: string;
    guestLogin: string;
    startTime: number | string;
    gameType: string;
    stepDtoList: Array<IStepDtoList>;
}

export interface IInitialState {
  rooms: Array<IRoom>;
  gameType: string;
  toRoom: string;
}

export type TAction = typeof Actions
export type TReducer = Reducer<IInitialState, ActionType<TAction>>
