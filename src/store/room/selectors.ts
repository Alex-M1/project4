import { createSelector } from 'reselect';
import { AppStateType } from '../rootReducer';

export const getRoom = (state: AppStateType) => state.room;
export const getRoomList = createSelector(
  getRoom,
  (room) => room.rooms,
);
export const getGameType = createSelector(
  getRoom,
  (room) => room.gameType,
);
