import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const Complete = () => (
  <BrowserRouter>
    <Header />
    <Router />
  </BrowserRouter>
);

ReactDOM.render(<Complete />, document.getElementById("root"));
