import { ActionTypes as AT } from './actionTypes';
import { IInitialState } from './types';

export const initialState: IInitialState = {
  statistic: [],
};

export const statisticReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_GAME_STATISTIC_BY_UUID:
      return {
        ...state,
        statistic: action.payload,
      };
    default: return state;
  }
};
