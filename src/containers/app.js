/**
 * Add a description about this file here.
 *
 * @flow
 *
 */


import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';
import Projects from './projects';
import About from './about';
import Apply from './apply';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/about" component={About} />
    <Route exact path="/apply" component={Apply} />
  </div>
);

export default App;
