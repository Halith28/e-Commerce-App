/**
 * @author Abdul Halith
 * @email abd.halith994@gmail.com
 * @create date 2021-05-09
 * @modify date 2021-05-09
 * @desc Different routes and their corresponding component are defined here.
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./routes";

import { Home, NotFound } from "./../screens";

const RouterApp = (props) => {
  return (
    <Router>
      <Switch>
        {/* Home Page route path */}
        <Route exact path={Routes.home} component={Home} />

        {/* For unknownon-defined path */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
