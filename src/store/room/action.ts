import { action } from 'typesafe-actions';
import { ActionTypes as AT } from './actionTypes';

export const addRoom = (payload) => action(AT.ADD_ROOM, payload);
