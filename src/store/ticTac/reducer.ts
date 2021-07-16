import { ITicTac, TReducer } from './types';
import { ActionTypes as AT } from './actionTypes';

export const initialState: ITicTac = {
  squares: Array(9).fill(null),
  steps: {
    count: 0,
    isUserStep: null,
  },
};

export const ticTacReducer: TReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.DO_STEP:
      return {
        ...state,
        steps: {
          ...state.steps,
          count: state.steps.count + 1,
        },
        squares: [...state.squares, state.squares[action.payload]],
      };
    default: return state;
  }
};
