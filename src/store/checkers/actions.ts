import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { ICheckerModel } from './types';

export const doStep = (payload: number) => action(AT.DO_STEP, payload);
export const doBotStep = (payload: string) => action(AT.DO_BOT_STEP, payload);
export const chooseCell = (payload: number) => action(AT.CHOOSE_CELL, payload);
export const refreshField = (payload: ICheckerModel[]) => action(AT.REFRESH_FIELD, payload);
export const setPossibleSteps = (payload: Array<number>) => (
  action(AT.SET_POSSIBLE_STEPS, payload)
);
export const connectCheckersChannel = () => action(AT.CONNECT_CHECKERS_CHANNEL);
