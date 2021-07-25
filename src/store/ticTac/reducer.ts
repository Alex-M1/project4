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
  isMyTurn: true,
  myOpponentGame: {
    id: null,
    gameType: null,
    guestLogin: null,
    startTime: null,
    stepDtoList: null,
  },
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
      const setGameEndUpdate: Partial<ITicTac> = {};
      if (state.myOpponentGame.id) {
        setGameEndUpdate.myOpponentGame = {
          ...state.myOpponentGame,
          id: null,
        };
      }

      return {
        ...state,
        isGameEnd: action.payload,
        ...setGameEndUpdate,
      };
    case AT.CLEAR_FIELDS:
      return {
        ...state,
        squares: Array(9).fill(null),
        isGameEnd: false,
        steps: {
          count: 0,
          isUserStep: null,
        },
      };
    case AT.SET_SQUARES:
      const stepsCount = action.payload.filter((field) => field !== null).length;

      return {
        ...state,
        squares: [...action.payload],
        steps: {
          ...state.steps,
          count: stepsCount,
        },
      };
    case AT.JOIN_MY_GAME:
      const joinMyGameUpdate: Partial<ITicTac> = {
        myOpponentGame: { ...action.payload },
      };

      if (!state.myOpponentGame.id) {
        joinMyGameUpdate.isMyTurn = true;
      }

      return {
        ...state,
        ...joinMyGameUpdate,
      };
    case AT.SET_TURN:
      return {
        ...state,
        isMyTurn: action.payload,
      };
    default: return state;
  }
};
