import { createStore } from 'redux';
import { rootReducer } from '../rootReducer';
import { initialState } from '../statistic/reducer';

describe('Root Reducer Suite', () => {
  const store = createStore(rootReducer);

  test('loaded correctly', () => {
    expect(store.getState().statistic).toEqual(initialState);
  });
});
