import { expect } from '@jest/globals';
import { initialState } from 'store/user/reducer';
import { AppStateType } from 'store/rootReducer';
import * as selectors from '../selectors';

describe('userSelectors', () => {
  //@ts-ignore
  const store: AppStateType = {
    user: {
      ...initialState,
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
