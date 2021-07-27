import React from 'react';
import { shallow, mount } from 'enzyme';
import { CLIENT } from 'constants/urls';
import Input from '../Input';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
        t: jest.fn(),
    })),
}),
);

describe('Input', () => {
    describe('type text', () => {
        let props;
        beforeEach(() => {
            props = {
                type: 'text',
                value: 'value',
                onChange: jest.fn(),
                placeholder: 'asdasdasd',
            };
        });
        it('Should match snapshot', () => {
            const component = shallow(<Input {...props} />);
            expect(component.html()).toMatchSnapshot();
        });
        it('should render StInput', () => {
            const component = mount(<Input {...props} />);
            expect(component.find('styled__StInput')).toHaveLength(1);
        });
        it('should call onChange', () => {
            const component = mount(<Input {...props} />);
            component.find('styled__StInput').simulate('change', { target: { value: 'testValue' } });
            expect(props.onChange).toHaveBeenCalled();
        });
        it('should call Input without type', () => {
            const newProps = {
                value: 'value',
                onChange: jest.fn(),
                placeholder: 'asdasdasd',
            };
            const component = mount(<Input {...newProps} />);
            expect(component.find('styled__StInput').props().type)
                .toBe('text');
        });
    });
    describe('type password', () => {
        let props;
        beforeEach(() => {
            props = {
                type: 'password',
                value: 'value',
                onChange: jest.fn(),
                placeholder: 'asdasdasd',
            };
        });
        it('Should match snapshot', () => {
            const component = shallow(<Input {...props} />);
            expect(component.html()).toMatchSnapshot();
        });
        it('Should have StInput', () => {
            const component = mount(<Input {...props} />);
            expect(component.find('styled__StInput')).toHaveLength(1);
        });
        it('Should have StHidePass', () => {
            const component = mount(<Input {...props} />);
            expect(component.find('styled__StHidePass')).toHaveLength(1);
        });
        it('Should be a eye click', () => {
            const component = mount(<Input {...props} />);
            const eye = component.find('styled__StHidePass').simulate('click');
            expect(eye.props().src).toBe(CLIENT.show);
        });
        it('Should be a eye two click', () => {
            const component = mount(<Input {...props} />);
            const eye = component.find('styled__StHidePass').simulate('click');
            eye.simulate('click');
            expect(eye.props().src).toBe(CLIENT.show);
        });
    });
});
