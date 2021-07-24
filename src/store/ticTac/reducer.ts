import { TIC_TAC_ITEM } from 'constants/constants';
import { ITicTac, TReducer } from './types';
import { ActionTypes as AT } from './actionTypes';

export const initialState: ITicTac = {
  squares: Array(9).fill(null),
  steps: {
    count: 0,
    isUserStep: null,
  },
  isGameEnd: false,
};

export const ticTacReducer: TReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.DO_STEP:
      state.squares[action.payload] = state.steps.count % 2 === 0
        ? TIC_TAC_ITEM.X : TIC_TAC_ITEM.O;
      return {
        ...state,
        steps: {
          ...state.steps,
          count: state.steps.count + 1,
        },
        squares: [...state.squares],
      };
    case AT.SET_IS_GAME_END:
      return {
        ...state,
        isGameEnd: action.payload,
      };
    default: return state;
  }
};
