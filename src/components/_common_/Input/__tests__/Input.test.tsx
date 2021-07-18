import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../Input';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
      t: jest.fn(),
    })),
  }),
  );

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
        const component = shallow(<Input {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StInput', () => {
        const component = mount(<Input {...props} />);
        expect(component.find('styled__StInput')).toHaveLength(1);
    });
    it('should call onChange', () => {
        const component = shallow(<Input {...props} />);
        component.find('styled__StInput').simulate('change', { target: { value: 'testValue' } });
        expect(component.props().onChange).toHaveBeenCalled();
    });
});
