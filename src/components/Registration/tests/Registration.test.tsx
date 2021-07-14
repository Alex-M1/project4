import React from 'react';
import configureStore from 'redux-mock-store';
import { mountSmart, shallowSmart } from '../../../__tests__/testHelper';
import Registration from '../Registration';

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
it('should render RegIpt', () => {
  const component = mountSmart(<Registration />, store);
  expect(component.find('RegIpt')).toHaveLength(3);
});
it('should render RegBtn', () => {
  const component = mountSmart(<Registration />, store);
  expect(component.find('RegBtn')).toHaveLength(1);
});
it('should render RegNav', () => {
  const component = mountSmart(<Registration />, store);
  expect(component.find('RegNav')).toHaveLength(1);
});
});
