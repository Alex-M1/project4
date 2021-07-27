import { AppStateType } from 'store/rootReducer';
import { initialState } from '../reducer';
import * as selectors from '../selectors';

describe('checkerSelectors', () => {
  const store: AppStateType = {
    checkers: {
      ...initialState,
    },
  };
  it('getCheckers', () => {
    expect(selectors.getCheckers(store)).toEqual(store.checkers);
  });
  it('getCurrentCell', () => {
    expect(selectors.getCurrentCell(store)).toEqual(store.checkers.currentCell);
  });
  it('getPossibleStepsCells', () => {
    expect(selectors.getPossibleStepsCells(store, 4)).toEqual(false);
  });
  it('getFieldItem', () => {
    expect(selectors.getFieldItem(store, 4)).toEqual(store.checkers.field[4]);
  });
});
