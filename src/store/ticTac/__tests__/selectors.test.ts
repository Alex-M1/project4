import { expect } from '@jest/globals';
import { AppStateType } from 'store/rootReducer';
import { initialState } from '../reducer';
import * as selectors from '../selectors';

describe('ticTacSelectors', () => {
  //@ts-ignore
  const store: AppStateType = {
    ticTac: {
      ...initialState,
    },
  };
  it('getTicTac', () => {
    expect(selectors.getTicTac(store)).toEqual(store.ticTac);
  });
  it('getSquares', () => {
    expect(selectors.getSquares(store)).toEqual(store.ticTac.squares);
  });
  it('getIsGame', () => {
    expect(selectors.getIsGame(store)).toEqual(store.ticTac.isGameEnd);
  });
  it('getMyOpponentGame', () => {
    expect(selectors.getMyOpponentGame(store)).toEqual(store.ticTac.myOpponentGame);
  });
  it('getIsMyTurn', () => {
    expect(selectors.getIsMyTurn(store)).toEqual(store.ticTac.isMyTurn);
  });
  it('getWinner', () => {
    expect(selectors.getWinner(store)).toEqual(store.ticTac.winner);
  });
});
