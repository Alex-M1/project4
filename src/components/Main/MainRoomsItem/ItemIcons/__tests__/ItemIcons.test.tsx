import { mount, shallow } from 'enzyme';
import React from 'react';

import ItemIcons from '../ItemIcons';

describe('ItemIcons', () => {
  let props;
  beforeEach(() => {
    props = {
      src: 'string',
      alt: 'string',
    };
  });
  it('Should match snapshot', () => {
    const component = shallow(<ItemIcons {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StIcon', () => {
    const component = mount(<ItemIcons {...props} />);
    expect(component.find('styled__StIcon')).toHaveLength(1);
  });
  it('should render img', () => {
    const component = mount(<ItemIcons {...props} />);
    expect(component.find('img')).toHaveLength(1);
  });
});
