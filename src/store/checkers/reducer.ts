import { IInitialState } from 'store/checkers/types';

export const initialState: IInitialState = {
  field: null,
  currentCell: null,
};

export const checkerReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};
