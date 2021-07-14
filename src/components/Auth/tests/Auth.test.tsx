import React from 'react';
import configureStore from 'redux-mock-store';
import { mountSmart, shallowSmart } from '../../../__tests__/testHelper';
import Auth from '../Auth';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
      t: jest.fn(),
    })),
  }),
);

const mockStore = configureStore();
const store = mockStore({
  credentials: { 
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

describe('Auth', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<Auth />, store);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StGlobalCredentials', () => {
        const component = mountSmart(<Auth />, store);
        expect(component.find('styled__StGlobalCredentials')).toHaveLength(1);
    });
    it('should render StContainer', () => {
      const component = mountSmart(<Auth />, store);
      expect(component.find('styled__StContainer')).toHaveLength(1);
  });
  it('should render Title', () => {
    const component = mountSmart(<Auth />, store);
    expect(component.find('Title')).toHaveLength(1);
});
it('should render AuthIpt', () => {
  const component = mountSmart(<Auth />, store);
  expect(component.find('AuthIpt')).toHaveLength(2);
});
it('should render AuthBtn', () => {
  const component = mountSmart(<Auth />, store);
  expect(component.find('AuthBtn')).toHaveLength(1);
});
it('should render AuthNav', () => {
  const component = mountSmart(<Auth />, store);
  expect(component.find('AuthNav')).toHaveLength(1);
});
});
