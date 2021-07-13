import { createSelector } from 'reselect';
import { AppStateType } from '../rootReducer';

export const credentials = (state: AppStateType) => state.credentials;
export const auth = createSelector(
  credentials, 
  (credentials) => credentials.auth,
);
export const registration = createSelector(
  credentials,
  (credentials) => credentials.registration,
);
export const inputValue = createSelector(
  credentials,
  (_state: AppStateType, page: string) => page,
  (_state: AppStateType, _page, field: string) => field,
  (credentials, page, field) => credentials[page][field],
);
