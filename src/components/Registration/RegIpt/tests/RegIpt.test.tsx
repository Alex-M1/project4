import React from 'react';
import { mount, shallow } from 'enzyme';
import RegIpt from '../RegIpt';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
      t: jest.fn(),
    })),
  }),
);

describe('RegIpt', () => {
    let props;
    beforeEach(() => {
        props = {
            type: 'login', 
            value: 'value', 
            onChange: jest.fn(),
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<RegIpt {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StInputDiv', () => {
        const component = mount(<RegIpt {...props}/>);
        expect(component.find('styled__StInputDiv')).toHaveLength(1);
    });
    it('should render StSpan', () => {
        const component = mount(<RegIpt {...props}/>);
        expect(component.find('styled__StSpan')).toHaveLength(1);
    });
    it('should call onChange', () => {
        const component = mount(<RegIpt {...props} />);
        component.find('styled__StInput').simulate('change', { target: { value: 'testValue' } });
        expect(component.props().onChange).toHaveBeenCalled();
    });
    it('should change onChange', () => {
        const component = mount(<RegIpt {...props} />);
        const ipt = component.find('RegIpt');
        ipt.props().onChange({ target: { value: 'sdads' } });
        expect(component.props().onChange).toHaveBeenCalled();
    });
});
