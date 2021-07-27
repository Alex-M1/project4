import React from 'react';
import { mount, shallow } from 'enzyme';
import StatisticItem from '../StatisticItem';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
        t: jest.fn(),
    })),
}),
);

describe('StatisticItem', () => {
    let props;
    beforeEach(() => {
        props = {
          creatorLogin, 
          gameType, 
          guestLogin, 
          winnerLogin
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<StatisticItem {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StInputDiv', () => {
        const component = mount(<StatisticItem {...props} />);
        expect(component.find('styled__StInputDiv')).toHaveLength(1);
    });
});
