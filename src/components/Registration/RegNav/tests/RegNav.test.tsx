import React from 'react';
import RegNav from '../RegNav';
import { mountSmart, shallowSmart } from '../../../../__tests__/testHelper';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
      t: jest.fn(),
    })),
  }),
);

describe('RegNav', () => {
    let props;
    beforeEach(() => {
        props = {
            
        };
    });
    it('Should match snapshot', () => {
        const component = shallowSmart(<RegNav {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StNavLink', () => {
        const component = mountSmart(<RegNav {...props}/>);
        expect(component.find('styled__StNavLink')).toHaveLength(1);
    });
    it('should change', () => {
        const component = mountSmart(<RegNav {...props}/>);
        expect(component.find('styled__StNavLink')).toHaveLength(1);
    });
});
