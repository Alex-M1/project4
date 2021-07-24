import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { IStatUUID } from './types';

export const setStatistic = (payload: IStatUUID) => action(AT.SET_GAME_STATISTIC, payload);
export const getStatistic = () => action(AT.GET_GAME_STATISTIC);
