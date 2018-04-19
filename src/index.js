import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/app';
import './styles/index.css';

const target = document.querySelector('#root');

render(
  <BrowserRouter>
    <div>
      <App />
    </div>
  </BrowserRouter>,
  target,
);
