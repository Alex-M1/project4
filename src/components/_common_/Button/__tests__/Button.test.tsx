import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
      t: jest.fn(),
    })),
  }),
);

describe('Button', () => {
    let props;
    beforeEach(() => {
        props = {
            text: 'login',
            onClick: jest.fn(),
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<Button {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StButton', () => {
        const component = shallow(<Button {...props}/>);
        expect(component.find('styled__StButton')).toHaveLength(1);
    });
    it('should call onClick', () => {
        const component = shallow(<Button {...props}/>);
        component.find('styled__StButton').simulate('click');
        expect(props.onClick).toHaveBeenCalled();
    });
});
