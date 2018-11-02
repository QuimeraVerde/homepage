import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import App from './components/App';
​import configureStore from './configureStore';

const history = createBrowserHistory();

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

render(
  <Provider store={store} history={history}>
    <App />
  </Provider>,
  document.getElementById('root')
);
