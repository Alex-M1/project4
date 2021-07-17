import { ICredential } from './types';
import { ActionTypes as AT } from './actionTypes';

export const initialState: ICredential = {
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
};

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.ADD_ROOM: {
      return {
        ...state,
        rooms: [
          ...state.rooms,
          action.payload,
        ],
      };
    }
    default: return state;
  }
};
