import { expect } from '@jest/globals';
import * as selectors from '../selectors';

describe('userSelectors', () => {
  const store = {
    user: {
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
    },
  };
  it('getUser', () => {
    expect(selectors.getUser(store)).toEqual(store.user);
  });
  it('getAuthData', () => {
    expect(selectors.getAuthData(store)).toEqual(store.user.auth);
  });
  it('getIsRedirect', () => {
    expect(selectors.getIsRedirect(store)).toEqual(store.user.isRedirect);
  });
  it('getInputValue', () => {
    expect(selectors.getInputValue(store, { page: 'auth', field: 'login' }))
      .toEqual(store.user.auth.login);
  });
});
