import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as Actions from './actions';

export interface ICheckerModel {
  blackSquare: boolean,
  checker?: {
    blackChecker: boolean,
    queen: boolean,
  },
}

export interface IInitialState {
  currentCell: number,
  field: Array<ICheckerModel>,
  possibleSteps: Array<number>,
  
}
export type TActions = typeof Actions
export type TReducer = Reducer<IInitialState, ActionType<TActions>>
