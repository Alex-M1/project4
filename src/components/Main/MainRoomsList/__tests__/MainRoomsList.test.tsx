import React from 'react';
import { mountSmart, shallowSmart } from 'src/__tests__/testHelper';
import MainRoomsList from '../MainRoomsList';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}));

describe('MainRoomsList', () => {
  const props = {
    rooms: [{ id: 'ada', creatorLogin: '', gameType: '' }],
    toRoom: '',
    myOpponentGame: {
      id: 'string',
      guestLogin: 'string',
      startTime: 123123123,
      gameType: 'string',
      stepDtoList: [],
    },
    redirectToRoom: jest.fn(),
    socketConnection: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = shallowSmart(<MainRoomsList {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StRooms', () => {
    const component = mountSmart(<MainRoomsList {...props} />);
    expect(component.find('styled__StRooms')).toHaveLength(1);
  });
  it('should render StRoomsContainer', () => {
    const component = mountSmart(<MainRoomsList {...props} />);
    expect(component.find('styled__StRoomsContainer')).toHaveLength(1);
  });
  it('should render Title', () => {
    const component = mountSmart(<MainRoomsList {...props} />);
    expect(component.find('Title')).toHaveLength(1);
  });
  it('should render AddRoomBtn', () => {
    const component = mountSmart(<MainRoomsList {...props} />);
    expect(component.find('AddRoomBtn')).toHaveLength(1);
  });
  it('should render MainRoomsItem', () => {
    const component = mountSmart(<MainRoomsList {...props} />);
    expect(component.find('MainRoomsItem')).toHaveLength(props.rooms.length);
  });
  it('should render StP', () => {
    const newProps = { ...props, rooms: [] };
    const component = mountSmart(<MainRoomsList {...newProps} />);
    expect(component.find('styled__StP')).toHaveLength(1);
  });
  it('should call socketConnection', () => {
    mountSmart(<MainRoomsList {...props} />);
    expect(props.socketConnection).toHaveBeenCalled();
  });
  it('should call localStorage', () => {
    const spy = jest
      .spyOn(window.localStorage.__proto__, 'setItem');
    mountSmart(<MainRoomsList {...props} />);
    expect(spy).toHaveBeenCalled();
  });
  it('should call localStorage without myOpponentGame.id', () => {
    const spy = jest
      .spyOn(window.localStorage.__proto__, 'setItem');
    const newProps = { ...props, myOpponentGame: { ...props.myOpponentGame, id: null } };
    mountSmart(<MainRoomsList {...newProps} />);
    expect(spy).toHaveBeenCalled();
  });

  it('should render Redirect', () => {
    const newProps = { ...props, toRoom: 'Checkers' };
    const component = mountSmart(<MainRoomsList {...newProps} />);
    expect(component.find('Redirect')).toHaveLength(1);
  });
  it('should render call redirectToRoom', () => {
    const newProps = { ...props, toRoom: 'Checkers' };
    mountSmart(<MainRoomsList {...newProps} />);
    expect(props.redirectToRoom).toHaveBeenCalled();
  });
});
