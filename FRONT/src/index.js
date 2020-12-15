import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import FormPage from "views/FormPage/FormPage"
import DisplayResultsPage from "views/DisplayResultsPage/DisplayResultsPage"

// pick a date util library

import DateFnsUtils from '@date-io/date-fns';


var hist = createBrowserHistory();

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/form-page" component={FormPage} />
      <Route path="/displaysearch-page" component={DisplayResultsPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>
  </MuiPickersUtilsProvider>,
  document.getElementById("root")
);
