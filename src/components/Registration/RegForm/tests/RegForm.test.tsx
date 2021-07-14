import React from 'react';
import { mount, shallow } from 'enzyme';
import RegForm from '../RegForm';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
        t: jest.fn(),
    })),
}),
);

describe('RegForm', () => {
    let props;
    beforeEach(() => {
        props = {
            type: 'login',
            value: 'value',
            onChange: jest.fn(),
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<RegForm {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StInputDiv', () => {
        const component = mount(<RegForm {...props} />);
        expect(component.find('styled__StInputDiv')).toHaveLength(1);
    });
    it('should render StSpan', () => {
        const component = mount(<RegForm {...props} />);
        expect(component.find('styled__StSpan')).toHaveLength(1);
    });
    it('should call onChange', () => {
        const component = mount(<RegForm {...props} />);
        component.find('styled__StInput').simulate('change', { target: { value: 'testValue' } });
        expect(component.props().onChange).toHaveBeenCalled();
    });
    it('should change onChange', () => {
        const component = mount(<RegForm {...props} />);
        const ipt = component.find('RegForm');
        ipt.props().onChange({ target: { value: 'sdads' } });
        expect(component.props().onChange).toHaveBeenCalled();
    });
});
