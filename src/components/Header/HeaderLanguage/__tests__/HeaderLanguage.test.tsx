import { mount, shallow } from 'enzyme';
import React from 'react';
import HeaderLanguage from '../HeaderLanguage';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    i18n: {
      changeLanguage: jest.fn(),
    },
  })),
}),
);

describe('HeaderLanguage', () => {
  it('Should match snapshot', () => {
    const component = shallow(<HeaderLanguage />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StLangToggle', () => {
    const component = mount(<HeaderLanguage />);
    expect(component.find('styled__StLangToggle')).toHaveLength(1);
  });
  it('should render StLangToggle click & lang = ru', () => {
    const component = mount(<HeaderLanguage />);
    const langToggle = component.find('styled__StLangToggle');
    langToggle.simulate('click');
    expect(langToggle.getDOMNode().textContent).toBe('Ru');
  });

  it('should render StLangToggle click & lang = en', () => {
    localStorage.setItem('lang', 'ru');
    const component = mount(<HeaderLanguage />);
    const langToggle = component.find('styled__StLangToggle');
    langToggle.simulate('click');
    expect(langToggle.getDOMNode().textContent).toBe('En');
  });
});
