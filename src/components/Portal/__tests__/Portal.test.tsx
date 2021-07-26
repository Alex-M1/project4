import React from 'react';
import { createPortal } from 'react-dom';
import renderer from 'react-test-renderer';

jest.mock('rc-util/lib/Portal');

const Drop = () => (
  createPortal(
    <div>hello</div>,
    this.dropContainer,
  )
);

test('Drop renders', () => {
  const component = renderer.create(
    <div>
      <input />
      <Drop />
    </div>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
