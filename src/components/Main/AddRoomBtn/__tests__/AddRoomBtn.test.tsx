import { mount, shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import { GAME_TYPE } from 'constants/constants';
import { mountSmart } from 'src/__tests__/testHelper';
import AddRoomBtn from '../AddRoomBtn';

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
});
describe('AddRoomBtn', () => {
  let portal;
  beforeEach(() => {
    portal = document.createElement('div');
    portal.setAttribute('id', 'portal');
    document.body.append(portal);
  });
  it('Should match snapshot', () => {
    const component = shallow(<AddRoomBtn />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StBtn', () => {
    const component = mount(<AddRoomBtn />);
    expect(component.find('styled__StBtn')).toHaveLength(1);
  });
  it('should not render Modal', () => {
    const component = mount(<AddRoomBtn />);
    expect(component.find('Modal')).not.toHaveLength(1);
  });
  it('should render Modal', () => {
    const component = mountSmart(<AddRoomBtn />, store);
    act(() => component.find('styled__StBtn').props().onClick());
    component.update();
    expect(component.find('Modal')).toHaveLength(1);
  });
});
