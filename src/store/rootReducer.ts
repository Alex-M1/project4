import { combineReducers } from 'redux';
import { ticTacReducer } from './ticTac/reducer';
import { roomReducer } from './room/reducer';
import { userReducer } from './user/reducer';
import { statisticReducer } from './statistic/reducer';
import { checkerReducer } from './checkers/reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  room: roomReducer,
  ticTac: ticTacReducer,
  checkers: checkerReducer,
  statistic: statisticReducer,
});

type ReducersType = typeof rootReducer
export type AppStateType = ReturnType<ReducersType>
