import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';

export const doStep = (payload: number) => action(AT.DO_STEP, payload);
