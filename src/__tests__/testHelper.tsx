import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Store } from 'redux';

export const shallowSmart = (component: JSX.Element, store?: Store) => {
  const core = store
    ? <Router><Provider store={store}> {component} </Provider></Router >
    : <Router>{component} </Router>;
  return shallow(core);
};
export const mountSmart = (component: JSX.Element, store?: Store) => {
  const core = store
    ? <Router><Provider store={store}> {component} </Provider></Router >
    : <Router>{component} </Router>;
  return mount(core);
};
