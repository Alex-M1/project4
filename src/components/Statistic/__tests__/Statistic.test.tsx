import { GAME_TYPE } from 'constants/constants';
import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from 'src/__tests__/testHelper';
import Statistic from '../Statistic';
import StatisticTable from '../StatisticTable';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
      t: jest.fn(),
    })),
  }),
);

const mockStore = configureStore();
const store = mockStore({
  room: {
    rooms: [],
    gameType: GAME_TYPE.CHECKERS,
    toRoom: '',
  },
  ticTac: {
    squares: Array(9).fill(null),
    steps: {
      count: 0,
      isUserStep: null,
    },
    isGameEnd: false,
    isMyTurn: true,
    myOpponentGame: {
      id: null,
      gameType: null,
      guestLogin: null,
      startTime: null,
      stepDtoList: null,
    },
    winner: '',
  },
  statistic: {
    statistic: [
      {
        creatorLogin: 'string',
        gameType: 'string',
        guestLogin: 'string',
        winnerLogin: 'string',
      },
    ],
  },
});
describe('Statistic', () => {
  it('Should match snapshot', () => {
    const component = shallowSmart(<Statistic />, store);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StContainer', () => {
    const component = mountSmart(<Statistic />, store);
    expect(component.find('styled__StContainer')).toHaveLength(1);
  });
  it('should render StatisticTable', () => {
    const component = mountSmart(<StatisticTable />, store);
    expect(component.find('StatisticTable')).toHaveLength(1);
  });
});
