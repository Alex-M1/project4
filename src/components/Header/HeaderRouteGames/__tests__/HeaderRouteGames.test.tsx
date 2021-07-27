import { GAME_TYPE } from 'constants/constants';
import React from 'react';
import configureStore from 'redux-mock-store';
import { mountSmart, shallowSmart } from 'src/__tests__/testHelper';
import HeaderRouteGames from '../HeaderRouteGames';

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
  location: {
    pathname: '',
    search: '',
    state: {},
    hash: '',
  },
});
describe('HeaderRouteGames', () => {
  it('Should match snapshot', () => {
    const component = shallowSmart(<HeaderRouteGames />, store);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StWrapperGame', () => {
    const component = mountSmart(<HeaderRouteGames />, store);
    expect(component.find('styled__StWrapperGame')).toHaveLength(1);
  });
  it('should render StP', () => {
    const component = mountSmart(<HeaderRouteGames />, store);
    expect(component.find('styled__StP')).toHaveLength(1);
  });
  it('should render StNavLink', () => {
    const component = mountSmart(<HeaderRouteGames />, store);
    expect(component.find('NavLink')).toHaveLength(1);
});
});
