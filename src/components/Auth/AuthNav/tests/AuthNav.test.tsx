import React from 'react';
import { shallow } from 'enzyme';
import AuthNav from '../AuthNav';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
      t: jest.fn(),
    })),
  }),
);

describe('AuthNav', () => {
    let props;
    beforeEach(() => {
        props = {
            
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<AuthNav {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StNavLink', () => {
        const component = shallow(<AuthNav {...props}/>);
        expect(component.find('styled__StNavLink')).toHaveLength(1);
    });
});
