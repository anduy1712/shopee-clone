import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'src/pages/Home';
import Detail from 'src/pages/Detail';
import Cart from 'src/pages/Cart';
import Login from 'src/pages/Login';
import Search from 'src/pages/Search';
import User from 'src/pages/User';
import CheckOut from 'src/pages/CheckOut';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail/:idProduct" component={Detail} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/cart/checkout" component={CheckOut} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/user/:slug" component={User} />
    </Switch>
  );
};

export default Routes;
