import { createSelector } from 'reselect';
import { AppStateType } from '../rootReducer';
import { IStatUUID } from './types';

export const getStatistic = (state: AppStateType) => state.statistic;
export const getStatisticByUuid = createSelector(
  getStatistic,
  (data): Array<IStatUUID> => data.statistic,
);
