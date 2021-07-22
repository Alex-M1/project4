import { createSelector } from 'reselect';
import { AppStateType } from '../rootReducer';
import { IRoom } from './types';

export const getRoom = (state: AppStateType) => state.room;
export const getRoomList = createSelector(
  getRoom,
  (data): Array<IRoom> => data.rooms,
);
export const getGameType = createSelector(
  getRoom,
  (data): string => data.gameType,
);
