import React from 'react';
import configureStore from 'redux-mock-store';
import { mountSmart, shallowSmart } from 'tests/testHelper';
import Registration from '../Registration';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}),
);

const mockStore = configureStore();
const store = mockStore({
  user: {
    auth: {
      login: '',
      password: '',
    },
    registration: {
      login: '',
      password: '',
      confirm: '',
    },
    isRedirect: false,
  },
});

describe('Registration', () => {
  it('Should match snapshot', () => {
    const component = shallowSmart(<Registration />, store);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StGlobalCredentials', () => {
    const component = mountSmart(<Registration />, store);
    expect(component.find('styled__StGlobalCredentials')).toHaveLength(1);
  });
  it('should render StContainer', () => {
    const component = mountSmart(<Registration />, store);
    expect(component.find('styled__StContainer')).toHaveLength(1);
  });
  it('should render Title', () => {
    const component = mountSmart(<Registration />, store);
    expect(component.find('Title')).toHaveLength(1);
  });
  it('should render RegForm', () => {
    const component = mountSmart(<Registration />, store);
    expect(component.find('RegForm')).toHaveLength(3);
  });
  it('should render RegBtn', () => {
    const component = mountSmart(<Registration />, store);
    expect(component.find('RegBtn')).toHaveLength(1);
  });
  it('should render RegNav', () => {
    const component = mountSmart(<Registration />, store);
    expect(component.find('RegNavigation')).toHaveLength(1);
  });
});
