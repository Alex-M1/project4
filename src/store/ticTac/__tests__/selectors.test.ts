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
  it('getUser', () => {
    expect(selectors.getTicTac(store)).toEqual(store.ticTac);
  });
  it('getSquares', () => {
    expect(selectors.getSquares(store)).toEqual(store.ticTac.squares);
  });
  it('getIsGame', () => {
    expect(selectors.getIsGame(store)).toEqual(store.ticTac.isGameEnd);
  });
});
