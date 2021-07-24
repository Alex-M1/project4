import { mount, shallow } from 'enzyme';
import React from 'react';
import TicTacItem from '../TicTacItem';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}),
);

describe('TicTacItem', () => {
  let props;
  beforeEach(() => {
    props = {
      square: 2,
      content: null,
      isGameEnd: false,
      onClick: jest.fn(),
    };
  });

  it('Should match snapshot', () => {
    const component = shallow(<TicTacItem {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StTicTacItem', () => {
    const component = mount(<TicTacItem {...props} />);
    expect(component.find('styled__StTicTacItem')).toHaveLength(1);
  });
  it('should click StTicTacItem', () => {
    const component = mount(<TicTacItem {...props} />);
    component.find('styled__StTicTacItem').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
  it('should click StTicTacItem content != null', () => {
    props.content = 'ada';
    const component = mount(<TicTacItem {...props} />);
    component.find('styled__StTicTacItem').simulate('click');
    expect(props.onClick).not.toHaveBeenCalled();
  });
  it('should click StTicTacItem isGameEnd', () => {
    props.isGameEnd = true;
    const component = mount(<TicTacItem {...props} />);
    component.find('styled__StTicTacItem').simulate('click');
    expect(props.onClick).not.toHaveBeenCalled();
  });
});
