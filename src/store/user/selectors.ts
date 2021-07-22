import { createSelector } from 'reselect';
import { AppStateType } from '../rootReducer';
import { IAuth, IGetInputValue, IRegistration } from './types';

export const getUser = (state: AppStateType) => state.user;
export const getAuthData = createSelector(
  getUser,
  (user): IAuth => user.auth,
);
export const getRegData = createSelector(
  getUser,
  (user): IRegistration => user.registration,
);
export const getIsRedirect = createSelector(
  getUser,
  (user): boolean => user.isRedirect,
);
export const getInputValue = createSelector(
  getUser,
  (_state: AppStateType, payload: IGetInputValue): IGetInputValue => payload,
  (user, { page, field }) => user[page][field],
);
