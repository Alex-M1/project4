import { CHECKER_FIELD_INIT } from 'constants/constants';
import { ActionTypes as AT } from './actionTypes';
import { IInitialState, TReducer } from './types';

export const initialState: IInitialState = {
  field: CHECKER_FIELD_INIT,
  currentCell: null,
  possibleSteps: [],
};

export const checkerReducer: TReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_POSSIBLE_STEPS:
      return {
        ...state,
        possibleSteps: action.payload,
      };
    default: return state;
  }
};
