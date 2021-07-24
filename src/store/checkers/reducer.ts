import { CHECKER_FIELD_INIT } from 'constants/constants';
import { IInitialState, TReducer } from './types';

export const initialState: IInitialState = {
  field: CHECKER_FIELD_INIT,
  currentCell: null,
};

export const checkerReducer: TReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};
