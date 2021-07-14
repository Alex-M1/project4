import React from 'react';
import { mountSmart, shallowSmart } from 'tests/testHelper';
import RegNavigation from '../RegNavigation';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
        t: jest.fn(),
    })),
}),
);

describe('RegNavigation', () => {
    let props;
    beforeEach(() => {
        props = {

        };
    });
    it('Should match snapshot', () => {
        const component = shallowSmart(<RegNavigation {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StNavLink', () => {
        const component = mountSmart(<RegNavigation {...props} />);
        expect(component.find('styled__StNavLink')).toHaveLength(1);
    });
    it('should change', () => {
        const component = mountSmart(<RegNavigation {...props} />);
        expect(component.find('styled__StNavLink')).toHaveLength(1);
    });
});
