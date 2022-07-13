import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import WhoWeAre from "../pages/WhoWeAre";
import Login from "../pages/Login";
import UserDashBoard from "../pages/UserDashBoard";
import OngDashBoard from "../pages/OngDashBoard";
import { RegisterPet } from "../pages/RegisterPet";
import OngSolicitation from "../pages/OngSolicitation";

import { Testemonials } from "../pages/Testemonials";

import UserRequest from "../pages/UserRequests";


function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path={"/quem-somos"}>
        <WhoWeAre />
      </Route>
      <Route path={"/cadastrar"}>
        <Login />
      </Route>
      <Route path={"/login"}>
        <Login />
      </Route>
      <Route path={"/user"}>
        <UserDashBoard />
      </Route>
      <Route path={"/user-solicitation"}>
        <UserRequest />
      </Route>
      <Route path={"/ong"}>
        <OngDashBoard />
      </Route>
      <Route path={"/registerPet"}>
        <RegisterPet />
      </Route>
      <Route path={"/ong-solicitation"}>
        <OngSolicitation />
      </Route>
      <Route path={"/testemonials"}>
        <Testemonials />
      </Route>
    </Switch>
  );
}

export default Routes;
