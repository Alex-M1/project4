import { userReducer, initialState } from '../reducer';
import * as actions from '../action';

describe('userReducer', () => {
  it('SET_CREDENTIALS_VALUE', () => {
    expect(userReducer(initialState, actions.setCredentialsValue({
      page: 'auth',
      field: 'login',
      value: 'value',
    })))
      .toEqual({
        ...initialState,
        auth: {
          ...initialState.auth,
          login: 'value',
        },
      });
  });
  it('SET_IS_REDIRECT', () => {
    expect(userReducer(initialState, actions.setIsRedirect(false)))
      .toEqual({
        ...initialState,
        isRedirect: false,
      });
  });
  it('CLEAR_USER_FIELDS', () => {
    expect(userReducer(initialState, actions.clearUserFields('auth')))
      .toEqual({
        ...initialState,
        auth: {
          login: '',
          password: '',
          confirm: '',
        },
      });
  });
});
