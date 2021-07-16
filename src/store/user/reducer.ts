import { ICredential, TReducer } from './types';
import { ActionTypes as AT } from './actionTypes';

export const initialState: ICredential = {
  auth: {
    login: '',
    password: '',
  },
  registration: {
    login: '',
    password: '',
    confirm: '',
  },
  isRedirect: false,
};

export const userReducer: TReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SET_CREDENTIALS_VALUE: {
      return {
        ...state,
        [action.payload.page]: {
          ...state[action.payload.page],
          [action.payload.field]: action.payload.value,
        },
      };
    }
    case AT.SET_IS_REDIRECT:
      return {
        ...state,
        isRedirect: action.payload,
      };
    case AT.CLEAR_USER_FIELDS:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          login: '',
          password: '',
          confirm: '',
        },
      };
    default: return state;
  }
};
