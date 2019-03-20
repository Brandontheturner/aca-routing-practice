import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import World from "./components/World";
import Status from "./components/Status";

//import home and about

const Router = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/world" component={World} />
    <Route path="/status" component={Status} />
  </Switch>
);

export default Router;
