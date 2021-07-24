import { statisticReducer, initialState } from '../reducer';
import * as actions from '../action';

describe('statisticReducer', () => {
  it('SET_GAME_STATISTIC', () => {
    const statistic = [{
      creatorLogin: 'string',
      guestLogin: 'string',
      winnerLogin: 'string',
      gameType: 'string',
    }];
    expect(statisticReducer(initialState, actions.setStatistic(statistic)))
      .toEqual({
        ...initialState,
        statistic,
    });
  });
  it('return state', () => {
    expect(statisticReducer(initialState, actions))
      .toEqual({
        ...initialState,
    });
  });
});
