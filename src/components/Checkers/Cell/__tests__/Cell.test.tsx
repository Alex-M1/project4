import React from 'react';
import { shallow, mount } from 'enzyme';
import Cell from '../Cell';

describe('Cell', () => {
  describe('without Checker', () => {
    let props;
    beforeEach(() => {
      props = {
        fieldItem: {},
        cellNumber: 2,
        possibleCell: false,
        doStep: jest.fn(),
        chooseCell: jest.fn(),
      };
    });
    it('Should match snapshot', () => {
      const component = shallow(<Cell {...props} />);
      expect(component.html()).toMatchSnapshot();
    });
    it('should render StCell', () => {
      const component = mount(<Cell {...props} />);
      expect(component.find('styled__StCell')).toHaveLength(1);
    });
    it('should not render Checker', () => {
      const component = mount(<Cell {...props} />);
      expect(component.find('Checker')).not.toHaveLength(1);
    });
    it('should click StCell', () => {
      const component = mount(<Cell {...props} />);
      component.find('styled__StCell').simulate('click');
      expect(props.chooseCell).toHaveBeenCalled();
    });
  });
  describe('with Checker', () => {
    let props;
    beforeEach(() => {
      props = {
        fieldItem: { checker: true },
        cellNumber: 2,
        possibleCell: true,
        doStep: jest.fn(),
        chooseCell: jest.fn(),
      };
    });
    it('Should match snapshot', () => {
      const component = shallow(<Cell {...props} />);
      expect(component.html()).toMatchSnapshot();
    });
    it('should render StCell', () => {
      const component = mount(<Cell {...props} />);
      expect(component.find('styled__StCell')).toHaveLength(1);
    });
    it('should not render Checker', () => {
      const component = mount(<Cell {...props} />);
      expect(component.find('Checker')).toHaveLength(1);
    });
    it('should click StCell', () => {
      const component = mount(<Cell {...props} />);
      component.find('styled__StCell').simulate('click');
      expect(props.doStep).toHaveBeenCalled();
    });
  });
});
