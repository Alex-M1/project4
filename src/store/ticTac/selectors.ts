import { createSelector } from 'reselect';
import { AppStateType } from 'store/rootReducer';

export const getTicTac = (state: AppStateType) => state.ticTac;

export const getSquares = createSelector(
  getTicTac,
  (ticTac): string[] => ticTac.squares,
);

export const getIsGame = createSelector(
  getTicTac,
  (ticTac): boolean => ticTac.isGameEnd,
);

export const getMyOpponentGame = createSelector(
    getTicTac,
    (ticTac): any => ticTac.myOpponentGame,
);

export const getIsMyTurn = createSelector(
    getTicTac,
    (ticTac): any => ticTac.isMyTurn,
);
