import React from "react";
import { render } from "react-dom";

import "normalize.css";
import "./www/css/main.css";

import app from "./app";

if (process.env.NODE_ENV === "development") {
  // attach react dev tools to window
  if (typeof window !== "undefined") {
    window.React = React;
  }
}

render(app, document.querySelector("#main"));
