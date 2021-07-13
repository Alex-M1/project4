import React from 'react';
import { shallowSmart } from '../../../../__tests__/testHelper';
import Button from '../Button';

describe('Button', () => {
    let props;
    beforeEach(() => {
        props = {
            text: 'login',
            onClick: jest.fn(),
        };
    });
    it('Should match snapshot', () => {
        const component = shallowSmart(<Button {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StButton', () => {
        const component = shallowSmart(<Button {...props}/>);
        expect(component.find('styled__StButton')).toHaveLength(0);
    });
    it('should call onClick', () => {
        const component = shallowSmart(<Button {...props}/>);
        component.find('styled__StButton').simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    });
});
