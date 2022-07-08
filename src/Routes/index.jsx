import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import WhoWeAre from '../pages/WhoWeAre';

function Routes() {
  return (
    <Switch>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route path={'/quem-somos'}>
          <WhoWeAre/>
        </Route>
    </Switch>
  )
}

export default Routes;