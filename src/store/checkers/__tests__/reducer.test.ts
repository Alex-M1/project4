import { CHECKER_FIELD_INIT } from 'constants/constants';
import { checkerReducer, initialState } from '../reducer';
import * as actions from '../actions';

describe('checkerReducer', () => {
  it('SET_POSSIBLE_STEPS', () => {
    expect(checkerReducer(initialState, actions.setPossibleSteps([25, 30])))
      .toEqual({
        ...initialState,
        possibleSteps: [25, 30],
      });
  });
  it('REFRESH_FIELD', () => {
    expect(checkerReducer(initialState, actions.refreshField(CHECKER_FIELD_INIT)))
      .toEqual({
        ...initialState,
        field: CHECKER_FIELD_INIT,
      });
  });
  it('CHOOSE_CELL', () => {
    expect(checkerReducer(initialState, actions.chooseCell(25)))
      .toEqual({
        ...initialState,
        currentCell: 25,
      });
  });
  it('state', () => {
    expect(checkerReducer(initialState, {}))
      .toEqual({
        ...initialState,
      });
  });
});
