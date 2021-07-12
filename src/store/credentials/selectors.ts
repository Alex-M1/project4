import { createSelector } from 'reselect';
import { AppStateType } from '../rootReducer';

export const authSelector = (state: AppStateType) => state.credentials;

export const inputValue = createSelector(
  authSelector,
  (_state: AppStateType, page: string) => page,
  (_state: AppStateType, field: string) => field,
  (credentials, page, field) => credentials[page][field],
);
