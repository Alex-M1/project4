import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './i18n';
import { rootReducer } from 'store/rootReducer';
import rootSaga from 'store/rootSaga';
import App from './components/App';

const saga = createSagaMiddleware();
const middlewares = [
  applyMiddleware(saga),
];
//@ts-ignore
if (window?.__REDUX_DEVTOOLS_EXTENSION__) {
  //@ts-ignore
  middlewares.push(window?.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(
  rootReducer,
  compose(
    ...middlewares,
  ),
);

saga.run(rootSaga);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
