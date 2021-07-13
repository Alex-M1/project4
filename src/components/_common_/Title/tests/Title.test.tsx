import React from 'react';
import { shallowSmart } from '../../../../__tests__/testHelper';
import Title from '../Title';

describe('Title', () => {
    let props;
    beforeEach(() => {
        props = {
            text: 'login',
        };
    });
    it('Should match snapshot', () => {
        const component = shallowSmart(<Title {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StTitle', () => {
        const component = shallowSmart(<Title {...props}/>);
        expect(component.find('styled__StTitle')).toHaveLength(0);
    });
});
