import React from 'react';
import { shallowSmart } from '../../../../__tests__/testHelper';
import Input from '../Input';

describe('Input', () => {
    let props;
    beforeEach(() => {
        props = {
            type: 'type',
            value: 'value',
            onChange: jest.fn(),
        };
    });
    it('Should match snapshot', () => {
        const component = shallowSmart(<Input {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StInput', () => {
        const component = shallowSmart(<Input {...props} />);
        expect(component.find('styled__StInput')).toHaveLength(0);
    });
    it('should call onChange', () => {
        const component = shallowSmart(<Input {...props} />);
        component.find('styled__StInput').simulate('change', { target: { name: props.name, value: 'testValue' } });
        expect(props.onChange).toHaveBeenCalledWith({ name: props.name, value: 'testValue' });
    });
});
