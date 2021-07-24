import { GAME_TYPE } from 'constants/constants';
import { IInitialState, TReducer } from './types';
import { ActionTypes as AT } from './actionTypes';

export const initialState: IInitialState = {
  rooms: [],
  gameType: GAME_TYPE.CHECKERS,
};

export const roomReducer: TReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_ROOM:
      return {
        ...state,
        rooms: action.payload,
      };
    case AT.SET_GAME_TYPE:
      return {
        ...state,
        gameType: action.payload,
      };
    default: return state;
  }
};
