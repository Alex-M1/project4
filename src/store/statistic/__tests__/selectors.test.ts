import { expect } from '@jest/globals';
import { AppStateType } from '../../rootReducer';
import { initialState } from '../reducer';
import * as selectors from '../selectors';

describe('statisticSelectors', () => {
  //@ts-ignore
  const store: AppStateType = {
    statistic: {
      ...initialState,
    },
  };
  it('getUser', () => {
    expect(selectors.getStatistic(store)).toEqual(store.statistic);
  });
  it('getAuthData', () => {
    expect(selectors.getStatisticByUuid(store)).toEqual(store.statistic.statistic);
  });
});
