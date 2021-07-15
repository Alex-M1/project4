import React from 'react';
import AuthNav from '../AuthNav';
import { mountSmart, shallowSmart } from 'tests/testHelper';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
        t: jest.fn(),
    })),
}),
);

describe('AuthNav', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<AuthNav />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StNavLink', () => {
        const component = mountSmart(<AuthNav />);
        expect(component.find('styled__StNavLink')).toHaveLength(1);
    });
    it('should change', () => {
        const component = mountSmart(<AuthNav />);
        expect(component.find('styled__StNavLink')).toHaveLength(1);
    });
});
