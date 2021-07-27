import { GAME_TYPE } from 'constants/constants';
import React from 'react';
import configureStore from 'redux-mock-store';
import { mountSmart, shallowSmart } from 'src/__tests__/testHelper';
import StatisticTable from '../StatisticTable';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
        t: jest.fn(),
    })),
}),
);

describe('StatisticTable', () => {
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
    describe('StatisticTable', () => {
      let props;
      beforeEach(() => {
        props = {
          getStatistic: jest.fn(),
          statisticData: [
            { 
            creatorLogin: 'string',
            gameType: 'string',
            guestLogin: 'string',
            winnerLogin: 'string',
           }, 
           { 
            creatorLogin: 'string',
            gameType: 'string',
            guestLogin: 'string',
            winnerLogin: 'string',
          }],
        };
      });
      it('Should match snapshot', () => {
        const component = shallowSmart(<StatisticTable {...props} />, store);
        expect(component.html()).toMatchSnapshot();
      });
      it('should render StWrapper', () => {
        const component = mountSmart(<StatisticTable {...props} />, store);
        expect(component.find('styled__StWrapper')).toHaveLength(1);
      });
      it('should render StHeaderWrapper', () => {
        const component = mountSmart(<StatisticTable {...props} />, store);
        expect(component.find('styled__StHeaderWrapper')).toHaveLength(1);
      });
      it('should render StResultsWrapper', () => {
        const component = mountSmart(<StatisticTable {...props} />, store);
        expect(component.find('styled__StResultsWrapper')).toHaveLength(1);
      });
      it('should render h1', () => {
        const component = mountSmart(<StatisticTable {...props} />, store);
        expect(component.find('h1')).toHaveLength(1);
      });
      it('should render div', () => {
        const component = mountSmart(<StatisticTable {...props} />, store);
        expect(component.find('div')).toHaveLength(6);
      });
      it('should render span', () => {
        const component = mountSmart(<StatisticTable {...props} />, store);
        expect(component.find('span')).toHaveLength(12);
      });
  });
});
