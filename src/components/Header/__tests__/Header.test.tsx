import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}),
);

describe('Header', () => {
  it('Should match snapshot', () => {
    const component = shallow(<Header />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StHeader', () => {
    const component = shallow(<Header />);
    expect(component.find('styled__StHeader')).toHaveLength(1);
  });
});
