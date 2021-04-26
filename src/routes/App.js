import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import News from '../containers/News';
import NotFount from '../containers/NotFount';
import Store from '../containers/Store';
import Users from '../containers/Users';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Users" component={Users} />
      <Route exact path="/News" component={News} />
      <Route exact path="/Store" component={Store} />
      <Route component={NotFount} />
    </Switch>
  </BrowserRouter>
);

export default App;