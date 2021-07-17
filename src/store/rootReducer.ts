import { combineReducers } from 'redux';
import { ticTacReducer } from './ticTac/reducer';
import { roomReducer } from './room/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  room: roomReducer,
  ticTac: ticTacReducer,
});

type ReducersType = typeof rootReducer
// eslint-disable-next-line no-undef
export type AppStateType = ReturnType<ReducersType>
