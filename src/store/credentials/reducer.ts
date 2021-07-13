import { ICredential, TCredentialsAction } from './types';
import * as AT from './actionTypes';

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

export const credentialsReducer = (state = initialState, action: TCredentialsAction) => {
  switch (action.type) {
    case AT.SET_CREDENTIALS_VALUE: {
      return {
        ...state,
        [action.setting.page]: {
          ...state[action.setting.page],
          [action.setting.field]: action.payload,
        },
      };
    }
    case AT.SET_IS_REDIRECT:
      return {
        ...state,
        isRedirect: action.isRedirect,
      };
    case AT.CLEAR_IPT:
      return {
        ...state,
        [action.page]: {
          ...state[action.page],
          login: '',
          password: '',
          confirm: '',
        },
      };
    default: return state;
  }
};
