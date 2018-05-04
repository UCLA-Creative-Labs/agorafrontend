import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './reducers/store';

import Admin from './containers/admin';
import './styles/index.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Admin />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
