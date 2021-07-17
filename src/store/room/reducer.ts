import { GAME_TYPE } from 'constants/constants';
import { IInitialState, TReducer } from './types';
import { ActionTypes as AT } from './actionTypes';

export const initialState: IInitialState = {
  rooms: [
    {
      id: 1,
      loginName: 'Alex',
      gameType: GAME_TYPE.TIC_TAC_TOE,
    },
    {
      id: 2,
      loginName: 'Marina',
      gameType: GAME_TYPE.CHECKERS,
    },
  ],
  gameType: GAME_TYPE.CHECKERS,
};

export const roomReducer: TReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_ROOM: 
      return {
        ...state,
        rooms: [
          ...state.rooms,
          action.payload,
        ],
      };
    case AT.SET_GAME_TYPE: 
      return {
        ...state,
        gameType: action.payload,
      };
    default: return state;
  }
};
