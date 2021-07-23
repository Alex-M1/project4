import { mount, shallow } from 'enzyme';
import React from 'react';
import TicTac from '../TicTac';

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
      match: { params: { id: 'ad' } },
      squares: ['ad', 'dasda'],
      isGameEnd: false,
      createRoomChanel: jest.fn(),
      stepWithBot: jest.fn(),
    };
  });

  it('Should match snapshot', () => {
    const component = shallow(<TicTac {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StTicTacContainer', () => {
    const component = mount(<TicTac {...props} />);
    expect(component.find('styled__StTicTacContainer')).toHaveLength(1);
  });
  it('should render StTicTacField', () => {
    const component = mount(<TicTac {...props} />);
    expect(component.find('styled__StTicTacField')).toHaveLength(1);
  });
  it('should render TicTacItem', () => {
    const component = mount(<TicTac {...props} />);
    expect(component.find('TicTacItem')).toHaveLength(2);
  });
  it('should render TicTac useEffect', () => {
    mount(<TicTac {...props} />);
    expect(props.createRoomChanel).toHaveBeenCalled();
  });
  it('should render TicTacItem click', () => {
    const component = mount(<TicTac {...props} />);
    component.find('TicTacItem').at(0).props().onClick();
    expect(props.stepWithBot).toHaveBeenCalled();
  });
});
