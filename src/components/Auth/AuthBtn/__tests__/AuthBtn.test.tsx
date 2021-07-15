import React from 'react';
import { mount, shallow } from 'enzyme';
import AuthBtn from '../AuthBtn';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
      t: jest.fn(),
    })),
  }),
);

describe('AuthBtn', () => {
    let props;
    beforeEach(() => {
        props = {
            signInRequest: jest.fn(),
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<AuthBtn {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StInputDiv', () => {
        const component = shallow(<AuthBtn {...props}/>);
        expect(component.find('styled__StInputDiv')).toHaveLength(1);
    });
    it('should render Button', () => {
        const component = shallow(<AuthBtn {...props}/>);
        expect(component.find('Button')).toHaveLength(1);
    });
    it('should call onClick', () => {
        const component = mount(<AuthBtn {...props}/>);
        component.find('Button').simulate('click');
        expect(component.props().signInRequest).toHaveBeenCalled();
    });
});
