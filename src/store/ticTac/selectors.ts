import { createSelector } from 'reselect';
import { IMyOpponentGame } from 'store/room/types';
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
    (ticTac): IMyOpponentGame => ticTac.myOpponentGame,
);

export const getIsMyTurn = createSelector(
    getTicTac,
    (ticTac): boolean => ticTac.isMyTurn,
);

export const getWinner = createSelector(
  getTicTac,
  (ticTac): string => ticTac.winner,
);
