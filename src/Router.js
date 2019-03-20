import React from "react";
import Switch from "react-router-dom";
import Route from "react-router-dom";
import App from "./App";
//import home and about

const Router = () => {
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
  </Switch>;
};

export default Router;
