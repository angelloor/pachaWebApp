import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DetailUser from '../containers/DetailUser'
import Home from '../containers/Home'
import Login from '../containers/Login'
import News from '../containers/News'
import NotFount from '../containers/NotFount'
import Store from '../containers/Store'
import Users from '../containers/Users'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/homeApp" component={Home} />
      <Route exact path="/usersApp" component={Users} />
      <Route exact path="/newsApp" component={News} />
      <Route exact path="/storeApp" component={Store} />
      <Route exact path="/detailUser/:id" component={DetailUser} />
      <Route component={NotFount} />
    </Switch>
  </BrowserRouter>
)

export default App