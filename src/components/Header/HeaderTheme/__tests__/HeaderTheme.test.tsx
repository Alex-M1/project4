import { mount, shallow } from 'enzyme';
import React from 'react';
import HeaderTheme from '../HeaderTheme';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    i18n: {
      changeLanguage: jest.fn(),
    },
  })),
}),
);
jest.mock('src/components/hooks/useTheme', () => ({
  useTheme: jest.fn().mockImplementation(() => ({
    colors: {
      dark: {},
      light: {},
    },
    theme: 'dark',
    changeTheme: jest.fn(),
  })),
}),
);

describe('HeaderTheme', () => {
  it('Should match snapshot', () => {
    const component = shallow(<HeaderTheme />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StThemeToggle', () => {
    const component = mount(<HeaderTheme />);
    expect(component.find('styled__StThemeToggle')).toHaveLength(1);
  });
});
