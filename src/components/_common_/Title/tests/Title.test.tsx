import React from 'react';
import { shallow } from 'enzyme';
import Title from '../Title';

describe('Title', () => {
    let props;
    beforeEach(() => {
        props = {
            text: 'login',
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<Title {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StTitle', () => {
        const component = shallow(<Title {...props}/>);
        expect(component.find('styled__StTitle')).toHaveLength(1);
    });
});
