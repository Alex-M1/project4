import { combineReducers } from 'redux';
import { ticTacReducer } from './ticTac/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  ticTac: ticTacReducer,
});

type ReducersType = typeof rootReducer
// eslint-disable-next-line no-undef
export type AppStateType = ReturnType<ReducersType>
