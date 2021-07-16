import React from 'react';
import ModRedirect from '../ModRedirect';
import { shallowSmart, mountSmart } from '../../../../__tests__/testHelper';

describe('ModRedirect', () => {
  const props = {
    to: '/',
    setIsRedirect: jest.fn(),
  };
  it('Should match snapshot', () => {
    const component = shallowSmart(<ModRedirect {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('Should have Redirect', () => {
    const component = mountSmart(<ModRedirect {...props} />);
    expect(component.find('Redirect')).toHaveLength(1);
  });
});
