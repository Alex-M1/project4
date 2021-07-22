import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { IStatUUID } from './types';

export const setDataUuid = (payload: IStatUUID) => action(AT.SET_GAME_STATISTIC_BY_UUID, payload);
// export const setDataUsername = (payload) => action(AT.SET_GAME_STATISTIC_BY_USERNAME, payload);
