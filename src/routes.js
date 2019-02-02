import React from 'react';
import {Router, Switch, Redirect, Route} from 'react-router-dom';
import App from './App';
import Home from './App/Shell/Home';
import About from './App/Shell/About';
import Login from './App/Exterior/Login';

export default ({history}) => (
  <Router history={history}>
    <App>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Redirect to={'/'} from={'*'} />
      </Switch>
    </App>
  </Router>
);