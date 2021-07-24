import { expect } from '@jest/globals';
import { AppStateType } from '../../rootReducer';
import { initialState } from '../reducer';
import * as selectors from '../selectors';

describe('userSelectors', () => {
  //@ts-ignore
  const store: AppStateType = {
    room: {
      ...initialState,
    },
  };
  it('getUser', () => {
    expect(selectors.getRoom(store)).toEqual(store.room);
  });
  it('getAuthData', () => {
    expect(selectors.getRoomList(store)).toEqual(store.room.rooms);
  });
  it('getIsRedirect', () => {
    expect(selectors.getGameType(store)).toEqual(store.room.gameType);
  });
});
