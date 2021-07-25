import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { IPlayWithBot, IPlayWithOpponent, IStepHistory } from './types';

export const doStep = (payload: number) => action(AT.DO_STEP, payload);
export const doBotStep = (payload: number) => action(AT.DO_BOT_STEP, payload);
export const setSquares = (payload: string[]) => action(AT.SET_SQUARES, payload);
export const setTurn = (payload: boolean) => action(AT.SET_TURN, payload);
export const clearFields = () => action(AT.CLEAR_FIELDS);
export const stepWithBot = (payload: IPlayWithBot) => action(AT.STEP_WITH_BOT, payload);
export const stepWithOpponent = (payload: IPlayWithOpponent) => action(AT.STEP_WITH_OPPONENT, payload);
export const setIsGameEnd = (payload: boolean) => action(AT.SET_IS_GAME_END, payload);
export const setStepHistory = (payload: IStepHistory) => action(AT.SET_STEP_HISTORY, payload);
export const createRoomChanel = (payload: any) => action(AT.CREATE_ROOM_CHANNEL, payload);
export const joinMyGame = (payload: any) => action(AT.JOIN_MY_GAME, payload);
