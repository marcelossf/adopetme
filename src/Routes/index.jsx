import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import WhoWeAre from "../pages/WhoWeAre";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

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
        <Cadastro />
      </Route>
      <Route exact path={"/login"}>
        <Login />
      </Route>
    </Switch>
  );
}

export default Routes;
