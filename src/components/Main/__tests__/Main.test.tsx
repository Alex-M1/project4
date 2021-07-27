import { CHECKER_FIELD_INIT, CHESS_DESK, GAME_TYPE } from 'constants/constants';
import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from 'src/__tests__/testHelper';
import Checkers from '../Checkers';

const mockStore = configureStore();
const store = mockStore({
  room: {
    rooms: [],
    gameType: GAME_TYPE.CHECKERS,
    toRoom: '',
  },
  ticTac: {

  },
});
describe('Checkers', () => {
  let props;
  beforeEach(() => {
    props = {
      refreshField: jest.fn(),
      connectCheckersChannel: jest.fn(),
    };
  });
  it('Should match snapshot', () => {
    const component = shallowSmart(<Checkers {...props} />, store);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StContainer', () => {
    const component = mountSmart(<Checkers {...props} />, store);
    expect(component.find('styled__StContainer')).toHaveLength(1);
  });
  it('should render StTable', () => {
    const component = mountSmart(<Checkers {...props} />, store);
    expect(component.find('styled__StTable')).toHaveLength(1);
  });
  it('should render Cell', () => {
    const component = mountSmart(<Checkers {...props} />, store);
    expect(component.find('Cell'))
      .toHaveLength(CHESS_DESK.ROWS.length * CHESS_DESK.COLS.length);
  });
});
