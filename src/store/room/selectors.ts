import { createSelector } from 'reselect';
import { AppStateType } from '../rootReducer';

export const getRoom = (state: AppStateType) => state.room;
export const getRoomItem = createSelector(
  getRoom,
  (room) => room.rooms,
);
