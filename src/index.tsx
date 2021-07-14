/* eslint-disable no-console */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './i18n';
import { rootReducer } from 'store/rootReducer';
import rootSaga from 'store/rootSaga';
import App from './components/App';

//@ts-ignore
const devTools = window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const saga = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    devTools,
  ),
);

saga.run(rootSaga);
const registration = async () => {
  await navigator.serviceWorker.register('../../../serviceWorker.js');
};
registration();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
