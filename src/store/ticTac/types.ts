import { Reducer } from 'redux';
import { IMyOpponentGame, IStepDtoList } from 'store/room/types';
import { ActionType } from 'typesafe-actions';
import * as Actions from './actions';

export type TStepHistory = Array<string> | string

export interface ITicTac {
  squares: string[] | null;
  steps: {
    count: number;
    isUserStep: boolean;
  };
  isGameEnd: boolean;
  isMyTurn: boolean;
  myOpponentGame: IMyOpponentGame;
  winner: string;
}

export interface IJoinMyGame {
    id: string,
    guestLogin: string,
    startTime: string,
    stepDtoList: Array<IStepDtoList>,
    gameType: string,
}

export interface ICreateRoomChanel {
  roomId: string,
  myOpponentGame: IMyOpponentGame,
}

export interface IPlayWithBot {
  square: number
}
export interface IPlayWithOpponent {
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
