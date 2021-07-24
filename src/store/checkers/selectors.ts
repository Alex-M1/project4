import { createSelector } from 'reselect';
import { AppStateType } from 'store/rootReducer';
import { ICheckerModel } from './types';

export const getCheckers = (state: AppStateType) => state.checkers;

export const getFieldItem = createSelector(
  getCheckers,
  (_checkers, cell: number) => cell,
  (checkers, cell): ICheckerModel => checkers.field[cell],
);
