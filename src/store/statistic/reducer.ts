import { ActionTypes as AT } from './actionTypes';
import { IInitialState } from './types';

export const initialState: IInitialState = {
  statistic: 
  [
    { 
      creatorLogin: 'qwertyui', 
      gameType: 'Tic-tac-toe', 
      id: '5a6d61c9-bd45-48e7-9d68-611ab75c18c2', 
    }, 
    { 
      creatorLogin: 'vovaa', 
      gameType: 'Tic-tac-toe', 
      id: 'c07f8d7c-ee53-4c5b-a714-cf4ab1bd37e8', 
    }, 
    { 
      creatorLogin: 'asdfg', 
      gameType: 'Checkers', 
      id: 'f31d3563-7702-493e-97c6-14a0d12e68ae', 
    }, 
    { 
      creatorLogin: 'marina', 
      gameType: 'Checkers', 
      id: 'b764492f-c592-4fc4-a049-a8d112ac3368', 
    },
  ],
};

export const statisticReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_GAME_STATISTIC_BY_UUID:
      return {
        ...state,
        statistic: action.payload,
      };
    // case AT.SET_GAME_TYPE:
    //   return {
    //     ...state,
    //     gameType: action.payload,
    //   };
    default: return state;
  }
};
