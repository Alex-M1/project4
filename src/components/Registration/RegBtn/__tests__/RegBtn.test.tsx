import React from 'react';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
//@ts-ignore
import { mountSmart } from 'tests/testHelper';
import RegBtn from '../RegBtn';

const mockStore = configureStore();
const store = mockStore({
    auth: {
        login: '',
        password: '',
    },
    registration: {
        login: '',
        password: '',
        confirm: '',
    },
    isRedirect: false,
});

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
        t: jest.fn(),
    })),
}),
);

describe('RegBtn', () => {
    let props;
    beforeEach(() => {
        props = {
            isRedirect: false,
            setIsRedirect: jest.fn(),
            signUpRequest: jest.fn(),
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<RegBtn {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StInputDiv', () => {
        const component = shallow(<RegBtn {...props} />);
        expect(component.find('styled__StInputDiv')).toHaveLength(1);
    });
    it('should render Button', () => {
        const component = shallow(<RegBtn {...props} />);
        expect(component.find('Button')).toHaveLength(1);
    });
    it('should call onClick', () => {
        const component = mount(<RegBtn {...props} />);
        component.find('Button').simulate('click');
        expect(component.props().signUpRequest).toHaveBeenCalled();
    });
    it('should redirect', () => {
        const newProps = {
            isRedirect: true,
            setIsRedirect: jest.fn(),
            signUpRequest: jest.fn(),
        };
        mountSmart(<RegBtn {...newProps} />, store);
        expect(newProps.setIsRedirect).toHaveBeenCalled();
    });
});
