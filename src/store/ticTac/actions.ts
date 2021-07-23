import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { IPlayWithBot } from './types';

export const doStep = (payload: number) => action(AT.DO_STEP, payload);
export const doBotStep = (payload: number) => action(AT.DO_BOT_STEP, payload);
export const stepWithBot = (payload: IPlayWithBot) => action(AT.STEP_WITH_BOT, payload);
export const setIsGameEnd = (payload: boolean) => action(AT.SET_IS_GAME_END, payload);
export const setStepHistory = (payload: any) => action(AT.SET_STEP_HISTORY, payload);
export const createRoomChanel = (payload: string) => action(AT.CREATE_ROOM_CHANNEL, payload);
