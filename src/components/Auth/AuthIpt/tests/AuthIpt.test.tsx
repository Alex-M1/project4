import React from 'react';
import { mount, shallow } from 'enzyme';
import AuthIpt from '../AuthIpt';
import Input from '../../../_common_/Input';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
      t: jest.fn(),
    })),
  }),
);

describe('AuthIpt', () => {
    let props;
    beforeEach(() => {
        props = {
            type: 'login', 
            value: 'value', 
            onChange: jest.fn(),
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<AuthIpt {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StInputDiv', () => {
        const component = mount(<AuthIpt {...props}/>);
        expect(component.find('styled__StInputDiv')).toHaveLength(1);
    });
    it('should render StSpan', () => {
        const component = mount(<AuthIpt {...props}/>);
        expect(component.find('styled__StSpan')).toHaveLength(1);
    });
    it('should call onChange', () => {
        const component = mount(<Input {...props} />);
        component.find('styled__StInput').simulate('change', { target: { value: 'testValue' } });
        expect(component.props().onChange).toHaveBeenCalled();
    });
});
