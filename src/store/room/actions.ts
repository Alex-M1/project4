import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';
import { IRoom } from './types';

export const addRoom = (payload: IRoom[]) => action(AT.ADD_ROOM, payload);
export const createRoom = () => action(AT.CREATE_ROOM);
export const setGameType = (payload: string) => action(AT.SET_GAME_TYPE, payload);
export const socketConnection = () => action(AT.SOCKET_CONNECTION);
