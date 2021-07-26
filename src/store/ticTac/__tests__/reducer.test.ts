import { ticTacReducer, initialState } from '../reducer';
import * as actions from '../actions';

describe('ticTacReducer', () => {
  it('DO_STEP O', () => {
    initialState.steps.count = 1;
    expect(ticTacReducer(initialState, actions.doStep(5)))
      .toEqual({
        ...initialState,
        steps: {
          ...initialState.steps,
          count: 2,
        },
        squares: [...initialState.squares],
      });
  });
  it('DO_STEP X', () => {
    initialState.steps.count = 0;
    expect(ticTacReducer(initialState, actions.doStep(5)))
      .toEqual({
        ...initialState,
        steps: {
          ...initialState.steps,
          count: 1,
        },
        squares: [...initialState.squares],
      });
  });
  it('SET_IS_GAME_END + id', () => {
    initialState.myOpponentGame.id = '1qaz';
    expect(ticTacReducer(initialState, actions.setIsGameEnd(true)))
      .toEqual({
        ...initialState,
        isGameEnd: true,
        myOpponentGame: {
           ...initialState.myOpponentGame,
           id: null,
        },
      });
  });
  it('SET_IS_GAME_END - id', () => {
    initialState.myOpponentGame.id = null;
    expect(ticTacReducer(initialState, actions.setIsGameEnd(true)))
      .toEqual({
        ...initialState,
        isGameEnd: true,
        myOpponentGame: {
           ...initialState.myOpponentGame,
        },
      });
  });
  it('return state', () => {
    expect(ticTacReducer(initialState, actions))
      .toEqual({
        ...initialState,
    });
  });
  it('SET_WINNER', () => {
    expect(ticTacReducer(initialState, actions.setWinner('win')))
      .toEqual({
        ...initialState,
        winner: 'win',
    });
  });
  it('CLEAR_FIELDS', () => {
    expect(ticTacReducer(initialState, actions.clearFields()))
      .toEqual({
        ...initialState,
        squares: Array(9).fill(null),
        isGameEnd: false,
        steps: {
          count: 0,
          isUserStep: null,
        },
    });
  });
  it('SET_TURN', () => {
    expect(ticTacReducer(initialState, actions.setTurn(true)))
      .toEqual({
        ...initialState,
        isMyTurn: true,
    });
  });
  it('SET_SQUARES', () => {
    const stepsCount = '1';
    expect(ticTacReducer(initialState, actions.setSquares([stepsCount])))
      .toEqual({
        ...initialState,
        squares: [
          '1',
        ],
        steps: {
          count: 1,
          isUserStep: null,
        },
      });
    });
  it('JOIN_MY_GAME + id', () => {
    const joinMyGameUpdate = {
        id: 'string',
        guestLogin: 'string',
        startTime: 'string',
        gameType: 'string',
        stepDtoList: [
          {
            login: 'string',
            step: 'string',
            time: 1,
            id: 'string',
          },
        ],
      };
    expect(ticTacReducer(initialState, actions.joinMyGame(joinMyGameUpdate)))
      .toEqual({
        ...initialState,
        myOpponentGame: {
          ...joinMyGameUpdate,
        },
    });
  });
  it('JOIN_MY_GAME - id', () => {
    const joinMyGameUpdate = {
        id: null,
        guestLogin: 'string',
        startTime: 'string',
        gameType: 'string',
        stepDtoList: [
          {
            login: 'string',
            step: 'string',
            time: 1,
            id: 'string',
          },
        ],
      };
    expect(ticTacReducer(initialState, actions.joinMyGame(joinMyGameUpdate)))
      .toEqual({
        ...initialState,
        myOpponentGame: {
          ...joinMyGameUpdate,
        },
    });
  });
});
