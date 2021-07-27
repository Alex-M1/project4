import { GAME_TYPE } from 'constants/constants';
import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from 'src/__tests__/testHelper';
import Main from '../Main';

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
});
describe('Main', () => {
  it('Should match snapshot', () => {
    const component = shallowSmart(<Main />, store);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StGlobalCredentials', () => {
    const component = mountSmart(<Main />, store);
    expect(component.find('styled__StGlobalCredentials')).toHaveLength(1);
  });
  it('should render MainRoomsList', () => {
    const component = mountSmart(<Main />, store);
    expect(component.find('MainRoomsList')).toHaveLength(1);
  });
});
