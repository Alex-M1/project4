import { roomReducer, initialState } from '../reducer';
import * as actions from '../actions';

describe('userReducer', () => {
  it('ADD_ROOM', () => {
    const rooms = [{
      id: 'string',
      creatorLogin: 'string',
      gameType: 'string',
    }]
    expect(roomReducer(initialState, actions.addRoom(rooms)))
      .toEqual({
        ...initialState,
        rooms: rooms
      });
  });
  it('SET_IS_REDIRECT', () => {
    const payload = 'Tic-tac-toe'
    expect(roomReducer(initialState, actions.setGameType(payload)))
      .toEqual({
        ...initialState,
        gameType: payload
      });
  });
});
