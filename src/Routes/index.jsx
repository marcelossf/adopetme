import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import WhoWeAre from "../pages/WhoWeAre";
import Login from "../pages/Login";
import UserDashBoard from "../pages/UserDashBoard";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path={"/quem-somos"}>
        <WhoWeAre />
      </Route>
      <Route exact path={"/cadastrar"}>
        <Login />
      </Route>
      <Route exact path={"/login"}>
        <Login />
      </Route>
      <Route exaxt path={"/user"}>
        <UserDashBoard />
      </Route>
    </Switch>
  );
}

export default Routes;
