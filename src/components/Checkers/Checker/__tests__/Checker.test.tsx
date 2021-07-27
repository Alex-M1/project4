import React from 'react';
import { shallow, mount } from 'enzyme';
import Checker from '../Checker';

describe('Checker', () => {
  describe('white checker', () => {
    let props;
    beforeEach(() => {
      props = {
        isBlack: false,
        isQueen: false,
      };
    });
    it('Should match snapshot', () => {
      const component = shallow(<Checker {...props} />);
      expect(component.html()).toMatchSnapshot();
    });
    it('should render div', () => {
      const component = mount(<Checker {...props} />);
      expect(component.find('div')).toHaveLength(2);
    });
    it('should render StCellWhite', () => {
      const component = mount(<Checker {...props} />);
      expect(component.find('styled__StCellWhite')).toHaveLength(1);
    });
    it('should render StCellWhite & queen', () => {
      const newProps = {
        isBlack: false,
        isQueen: true,
      };
      const component = mount(<Checker {...newProps} />);
      expect(component.find('styled__StCellWhite')).toHaveLength(1);
    });
  });
  describe('black checker', () => {
    let props;
    beforeEach(() => {
      props = {
        isBlack: true,
        isQueen: false,
      };
    });
    it('Should match snapshot', () => {
      const component = shallow(<Checker {...props} />);
      expect(component.html()).toMatchSnapshot();
    });
    it('should render div', () => {
      const component = mount(<Checker {...props} />);
      expect(component.find('div')).toHaveLength(2);
    });
    it('should render StCellBlack', () => {
      const component = mount(<Checker {...props} />);
      expect(component.find('styled__StCellBlack')).toHaveLength(1);
    });
    it('should render StCellWhite & queen', () => {
      const newProps = {
        isBlack: true,
        isQueen: true,
      };
      const component = mount(<Checker {...newProps} />);
      expect(component.find('styled__StCellBlack')).toHaveLength(1);
    });
  });
});
