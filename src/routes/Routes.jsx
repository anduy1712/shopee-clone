import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Search from '../pages/Search';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail/:slug" component={Detail} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/search" component={Search} />
    </Switch>
  );
};

export default Routes;
