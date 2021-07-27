import { CLIENT } from 'constants/urls';
import React from 'react';
import { mountSmart, shallowSmart } from 'src/__tests__/testHelper';
import MainRoomsItem from '../MainRoomsItem';

describe('MainRoomsItem', () => {
  let props;
  beforeEach(() => {
    props = {
      id: 'string',
      type: 'string',
      login: 'string',
    };
  });
  it('Should match snapshot', () => {
    const component = shallowSmart(<MainRoomsItem {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StItem', () => {
    const component = mountSmart(<MainRoomsItem {...props} />);
    expect(component.find('styled__StItem')).toHaveLength(1);
  });
  it('should render NavLink', () => {
    const component = mountSmart(<MainRoomsItem {...props} />);
    expect(component.find('NavLink')).toHaveLength(1);
  });
  it('should render p', () => {
    const component = mountSmart(<MainRoomsItem {...props} />);
    expect(component.find('p')).toHaveLength(1);
  });
  it('should render ItemIcons', () => {
    const component = mountSmart(<MainRoomsItem {...props} />);
    expect(component.find('ItemIcons')).toHaveLength(2);
  });
  it('should render ItemIcons bot', () => {
    const ls = 'string';
    const spy = jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockImplementation(() => ls);
    const component = mountSmart(<MainRoomsItem {...props} />);
    expect(component.find('ItemIcons').at(0).props().src).toBe(CLIENT.bot);
    spy.mockRestore();
  });
  it('should render ItemIcons play', () => {
    const ls = 'Bot';
    const spy = jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockImplementation(() => ls);
    const component = mountSmart(<MainRoomsItem {...props} />);
    expect(component.find('ItemIcons').at(0).props().src).toBe(CLIENT.play);
    spy.mockRestore();
  });
  it('should click NavLink !isMyGame', () => {
    const spy = jest
      .spyOn(window.localStorage.__proto__, 'setItem');
    const component = mountSmart(<MainRoomsItem {...props} />);
    component.find('NavLink').props().onClick();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
  it('should click NavLink isMyGame', () => {
    const spy = jest
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockImplementation(() => 'string');
    const component = mountSmart(<MainRoomsItem {...props} />);
    component.find('NavLink').props().onClick();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
