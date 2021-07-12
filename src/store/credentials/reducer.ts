import { ICredential, TCredentialsAction } from './types';
import * as AT from './actionTypes';

export const initialState: ICredential = {
  auth: {
    login: '',
    password: '',
  },
  register: {
    login: '',
    password: '',
    confirm: '',
  },
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
    default: return state;
  }
};
