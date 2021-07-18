import React from 'react';
import { shallow } from 'enzyme';
import Title from '../Title';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
      t: jest.fn(),
    })),
  }),
);

describe('Title', () => {
    let props;
    beforeEach(() => {
        props = {
            text: 'login',
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<Title {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StTitle', () => {
        const component = shallow(<Title {...props}/>);
        expect(component.find('styled__StTitle')).toHaveLength(1);
    });
});
