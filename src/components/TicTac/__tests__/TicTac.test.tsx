import { GAME_SETTINGS } from 'constants/constants';
import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from 'src/__tests__/testHelper';
import TicTac from '../TicTac';

const mockStore = configureStore();
const store = mockStore({
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
jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}),
);
describe('TicTac', () => {
  let props;
  beforeEach(() => {
    props = {
      turn: true,
      squares: ['s', 's'],
      setTurn: jest.fn(),
      setWinner: jest.fn(),
      isGameEnd: true,
      stepWithBot: jest.fn(),
      winnerMessage: 'string',
      myOpponentGame: {
        id: 'string',
        guestLogin: 'string',
        startTime: 2131312312,
        gameType: 'string',
        stepDtoList: [],
      },
      createRoomChanel: jest.fn(),
      stepWithOpponent: jest.fn(),
    };
  });

  it('Should match snapshot', () => {
    const component = shallowSmart(<TicTac {...props} />, store);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StTicTacContainer', () => {
    const component = mountSmart(<TicTac {...props} />, store);
    expect(component.find('styled__StTicTacContainer')).toHaveLength(1);
  });
  it('should render StTurnText', () => {
    const component = mountSmart(<TicTac {...props} />, store);
    expect(component.find('styled__StTurnText')).toHaveLength(1);
  });
  it('should render StTicTacField', () => {
    const component = mountSmart(<TicTac {...props} />, store);
    expect(component.find('styled__StTicTacField')).toHaveLength(1);
  });
  it('should render TicTacItem', () => {
    const component = mountSmart(<TicTac {...props} />, store);
    expect(component.find('TicTacItem')).toHaveLength(props.squares.length);
  });
  it('should call setWinner', () => {
    mountSmart(<TicTac {...props} />, store);
    expect(props.setWinner).toHaveBeenCalledWith('');
  });
  it('should call createRoomChanel', () => {
    const newProps = {
      ...props,
      myOpponentGame: {
        ...props.myOpponentGame,
        id: null,
      },
    };
    const ls = JSON.stringify({ roomId: '31123' });
    const spy = jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockImplementation(() => ls);
    mountSmart(<TicTac {...newProps} />, store);
    expect(props.createRoomChanel).toHaveBeenCalled();
    spy.mockRestore();
  });
  it('should render TicTacItem click', () => {
    const ls = JSON.stringify({ roomId: '31123', playWith: GAME_SETTINGS.bot });
    const spy = jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockImplementation(() => ls);
    const component = mountSmart(<TicTac {...props} />, store);
    component.find('TicTacItem').at(0).props().onClick();
    expect(props.stepWithBot).toHaveBeenCalled();
    spy.mockRestore();
  });
  it('should render TicTacItem click plaWith user', () => {
    const ls = JSON.stringify({ roomId: '31123', playWith: GAME_SETTINGS.user });
    const spy = jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockImplementation(() => ls);
    const component = mountSmart(<TicTac {...props} />, store);
    component.find('TicTacItem').at(0).props().onClick();
    expect(props.stepWithOpponent).toHaveBeenCalled();
    spy.mockRestore();
  });
  it('should render TicTacItem click plaWith !turn', () => {
    const ls = JSON.stringify({ roomId: '31123', playWith: GAME_SETTINGS.user });
    const spy = jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockImplementation(() => ls);
    const newProps = { ...props, turn: false };
    const component = mountSmart(<TicTac {...newProps} />, store);
    component.find('TicTacItem').at(0).props().onClick();
    expect(props.stepWithOpponent).not.toHaveBeenCalled();
    spy.mockRestore();
  });
  it('should not winner message', () => {
    const newProps = { ...props, winnerMessage: false };
    const component = mountSmart(<TicTac {...newProps} />, store);
    expect(component.find('styled__StTurnText').getDOMNode().textContent).toBe('');
  });
  it('should not winner message !turn', () => {
    const newProps = { ...props, turn: false, winnerMessage: false };
    const component = mountSmart(<TicTac {...newProps} />, store);
    expect(component.find('styled__StTurnText').getDOMNode().textContent).toBe('');
  });
});
