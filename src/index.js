import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Connexion from "./components/Connexion";
import NotFound from "./components/NotFound";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Connection} />
      <Route path="/pseudo/:pseudo" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Connexion />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
