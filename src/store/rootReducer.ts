import { combineReducers, createStore } from 'redux';
import { credentialsReducer } from './credentials/reducer';

const rootReducer = combineReducers({
  credentials: credentialsReducer,
});

export const store = createStore(rootReducer);

type ReducersType = typeof rootReducer
// eslint-disable-next-line no-undef
export type AppStateType = ReturnType<ReducersType>
