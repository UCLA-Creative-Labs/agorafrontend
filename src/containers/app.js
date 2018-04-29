import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';
import Projects from './projects';
import About from './about';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/about" component={About} />
  </div>
);

export default App;
