import { ticTacReducer, initialState } from '../reducer';
import * as actions from '../actions';

describe('ticTacReducer', () => {
  it('DO_STEP', () => {
    expect(ticTacReducer(initialState, actions.doStep(5)))
      .toEqual({
        ...initialState,
        steps: {
          ...initialState.steps,
          count: 1,
        },
        squares: [...initialState.squares],
      });
  });
});
