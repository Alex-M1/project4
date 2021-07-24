import { createSelector } from 'reselect';
import { AppStateType } from 'store/rootReducer';
import { ICheckerModel } from './types';

export const getCheckers = (state: AppStateType) => state.checkers;

export const getFieldItem = createSelector(
  getCheckers,
  (_checkers, cell: number) => cell,
  (checkers, cell): ICheckerModel => checkers.field[cell],
);

export const getCurrentCell = createSelector(
  getCheckers,
  (checker): number => checker.currentCell,
);

export const getPossibleStepsCells = createSelector(
  getCheckers,
  (_checker, cell: number) => cell,
  (checkers, cell):boolean => checkers.possibleSteps.includes(cell),
);
