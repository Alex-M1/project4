import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';

export const chooseCell = (payload: number) => action(AT.CHOOSE_CELL, payload);
export const connectCheckersChannel = () => action(AT.CONNECT_CHECKERS_CHANNEL);
