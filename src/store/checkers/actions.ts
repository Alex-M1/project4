import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { IPossibleSteps } from './types';

export const chooseCell = (payload: number) => action(AT.CHOOSE_CELL, payload);
export const setPossibleSteps = (payload: Array<IPossibleSteps>) => (
  action(AT.SET_POSSIBLE_STEPS, payload)
);
export const connectCheckersChannel = () => action(AT.CONNECT_CHECKERS_CHANNEL);
