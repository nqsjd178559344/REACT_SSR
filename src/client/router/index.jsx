import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
];

export const Routes = () => (
  <Switch>
    {routes.map((r) => {
      const { path, exact, component } = r;
      return (
        <Route key={path} path={path} exact={exact} component={component} />
      );
    })}
    {/* 404 */}
  </Switch>
);
