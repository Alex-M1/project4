import { combineReducers } from 'redux';
import { credentialsReducer } from './credentials/reducer';

const rootReducer = combineReducers({
  credentials: credentialsReducer,
});

type ReducersType = typeof rootReducer
// eslint-disable-next-line no-undef
export type AppStateType = ReturnType<ReducersType>

export default rootReducer;
