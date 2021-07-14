import { createSelector } from 'reselect';
import { AppStateType } from '../rootReducer';

export const getUser = (state: AppStateType) => state.user;
export const getAuthData = createSelector(
  getUser,
  (user) => user.auth,
);
export const getRegData = createSelector(
  getUser,
  (user) => user.registration,
);
export const getIsRedirect = createSelector(
  getUser,
  (user) => user.isRedirect,
);
export const getInputValue = createSelector(
  getUser,
  (_state: AppStateType, page: string) => page,
  (_state: AppStateType, _page, field: string) => field,
  (user, page, field) => user[page][field],
);
