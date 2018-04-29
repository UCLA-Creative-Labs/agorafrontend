import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';
import Projects from './projects';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
  </div>
);

export default App;
