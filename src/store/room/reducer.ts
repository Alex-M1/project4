import { IInitialState, TReducer } from './types';
import { ActionTypes as AT } from './actionTypes';

export const initialState: IInitialState = {
  rooms: [
    {
      id: 1,
      loginName: 'Alex',
      gameType: 'ticTacToe',
    },
    {
      id: 2,
      loginName: 'Marina',
      gameType: 'checkers',
    },
  ],
  gameType: 'Checkers',
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
