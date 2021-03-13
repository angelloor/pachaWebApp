import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import NotFount from '../containers/NotFount';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFount} />
    </Switch>
  </BrowserRouter>
);

export default App;