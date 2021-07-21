import React from 'react';
import { mountSmart, shallowSmart } from 'src/__tests__/testHelper';
import Header from '../Header';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn().mockImplementation(() => ({
    t: jest.fn(),
  })),
}),
);

describe('Header', () => {
  const props = {
    location: {
      pathname: '',
      search: '',
      state: {},
      hash: '',

    },
  };
  it('Should match snapshot', () => {
    const component = shallowSmart(<Header {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StHeader', () => {
    const component = mountSmart(<Header {...props} />);
    expect(component.find('styled__StHeader')).toHaveLength(1);
  });
});
