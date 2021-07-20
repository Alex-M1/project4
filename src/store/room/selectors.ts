import { createSelector } from 'reselect';
import { AppStateType } from '../rootReducer';

export const getRoom = (state: AppStateType) => state.room;

export const getRoomList = createSelector(
  getRoom,
  ({ rooms }) => rooms,
);
export const getGameType = createSelector(
  getRoom,
  ({ gameType }) => gameType,
);
