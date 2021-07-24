import { expect } from '@jest/globals';
import { AppStateType } from '../../rootReducer';
import { initialState } from '../reducer';
import * as selectors from '../selectors';

describe('roomSelectors', () => {
  //@ts-ignore
  const store: AppStateType = {
    room: {
      ...initialState,
    },
  };
  it('getRoom', () => {
    expect(selectors.getRoom(store)).toEqual(store.room);
  });
  it('getRoomList', () => {
    expect(selectors.getRoomList(store)).toEqual(store.room.rooms);
  });
  it('getGameType', () => {
    expect(selectors.getGameType(store)).toEqual(store.room.gameType);
  });
});
