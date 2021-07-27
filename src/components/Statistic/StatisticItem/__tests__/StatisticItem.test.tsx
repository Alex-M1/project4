import React from 'react';
import { mountSmart, shallowSmart } from 'src/__tests__/testHelper';
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
        creatorLogin: 'string', 
        gameType: 'string', 
        guestLogin: 'string', 
        winnerLogin: 'string',
    };
  });
  it('Should match snapshot', () => {
    const component = shallowSmart(<StatisticItem {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render div', () => {
    const component = mountSmart(<StatisticItem {...props} />);
    expect(component.find('div')).toHaveLength(1);
  });
  it('should render span', () => {
    const component = mountSmart(<StatisticItem {...props} />);
    expect(component.find('span')).toHaveLength(4);
  });
});
