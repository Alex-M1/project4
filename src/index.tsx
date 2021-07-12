import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import { rootReducer } from 'store/rootReducer';
import App from './components/App';

//@ts-ignore
const devTools = window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(
    devTools,
  ),
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
