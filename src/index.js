import React from "react";
import ReactDOM from "react-dom/client";
import { Fragment } from "react";
import Router from "./router";
import './GlobalStyle.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <Router />
  </Fragment>
);