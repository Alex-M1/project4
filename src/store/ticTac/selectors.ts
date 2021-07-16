import { createSelector } from 'reselect';
import { AppStateType } from 'store/rootReducer';

export const getTicTac = (state: AppStateType) => state.ticTac;

export const getSquares = createSelector(
  getTicTac,
  (ticTac) => ticTac.squares,
);
