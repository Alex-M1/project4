import { roomReducer, initialState } from '../reducer';
import * as actions from '../actions';

describe('roomReducer', () => {
  it('ADD_ROOM', () => {
    const rooms = [{
      id: 'string',
      creatorLogin: 'string',
      gameType: 'string',
    }];
    expect(roomReducer(initialState, actions.addRoom(rooms)))
      .toEqual({
        ...initialState,
        rooms: rooms
      });
  });
  it('SET_GAME_TYPE', () => {
    const payload = 'Tic-tac-toe';
    expect(roomReducer(initialState, actions.setGameType(payload)))
      .toEqual({
        ...initialState,
        gameType: payload,
      });
  });
  it('return state', () => {
    expect(roomReducer(initialState, actions))
      .toEqual({
        ...initialState,
    });
  });
});
