import React from 'react';
import { Route } from 'react-router-dom';

import Login from './login'; 
import Dashboard from './dashboard';

const AppAdmin = () => (
  <div>
    <Route exact path="/" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
  </div>
);

export default AppAdmin;
