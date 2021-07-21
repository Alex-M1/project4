import { expect } from '@jest/globals';
import * as selectors from '../selectors';

describe('userSelectors', () => {
  const store = {
      room: 
      { rooms: {
        id: 1,
        loginName: 'login',
        gameType: 'checkers',
      },
      gameType: '' },
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
