import { combineReducers } from 'redux';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
});

type ReducersType = typeof rootReducer
// eslint-disable-next-line no-undef
export type AppStateType = ReturnType<ReducersType>
