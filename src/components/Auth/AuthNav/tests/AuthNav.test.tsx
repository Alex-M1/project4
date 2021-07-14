import React from 'react';
import AuthNav from '../AuthNav';
import { mountSmart, shallowSmart } from '../../../../__tests__/testHelper';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
      t: jest.fn(),
    })),
  }),
);

describe('AuthNav', () => {
    let props;
    beforeEach(() => {
        props = {
            
        };
    });
    it('Should match snapshot', () => {
        const component = shallowSmart(<AuthNav {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StNavLink', () => {
        const component = mountSmart(<AuthNav {...props}/>);
        expect(component.find('styled__StNavLink')).toHaveLength(1);
    });
    it('should change', () => {
        const component = mountSmart(<AuthNav {...props}/>);
        expect(component.find('styled__StNavLink')).toHaveLength(1);
    });
});
