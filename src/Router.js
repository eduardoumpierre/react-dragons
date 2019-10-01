import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from './config/constants';
import Home from './screens/Home';
import Form from './screens/Form';
import Detail from './screens/Detail';

export default () => (
  <Router>
    <Switch>
      <Route path={ROUTES.HOME} component={Home} exact />
      <Route path={ROUTES.FORM} component={Form} exact />
      <Route path={ROUTES.DETAIL} component={Detail} exact />
    </Switch>
  </Router>
);
