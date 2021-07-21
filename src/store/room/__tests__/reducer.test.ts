import { initialState, roomReducer } from '../reducer';
import * as actions from '../action';

describe('roomReducer', () => {
  it('ADD_ROOM', () => {
    expect(roomReducer(initialState, actions.addRoom({
      id: 1,
      loginName: 'login',
      gameType: 'checkers',
    })))
      .toEqual({
        ...initialState,
        rooms: [
          ...initialState.rooms,
          { id: 1,
            loginName: 'login',
            gameType: 'checkers' },
        ],
      });
  });
  it('SET_GAME_TYPE', () => {
    expect(roomReducer(initialState, actions.setGameType('Checkers')))
      .toEqual({
        ...initialState,
        gameType: 
          'Checkers',
      });
  });
});
