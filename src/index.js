/*

=========================================================
* Now UI Kit React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2022 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage";
import HomePage from "views/HomePage";
import AnimeDetails from "views/AnimeDetails";
import { store } from "./redux";
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>

    <BrowserRouter>
      <Switch>
        <Switch>
          <Route path="/index" render={(props) => <Index {...props} />} />
          <Route path="/anime/:id" render={(props) => <AnimeDetails {...props} />} />
          <Route
            path="/nucleo-icons"
            render={(props) => <NucleoIcons {...props} />}
          />
          <Route
            path="/landing-page"
            render={(props) => <LandingPage {...props} />}
          />
          <Route
            path="/profile-page"
            render={(props) => <ProfilePage {...props} />}
          />
          <Route
            path="/login-page"
            render={(props) => <LoginPage {...props} />}
          />
          <Route
            path="/register-page"
            render={(props) => <RegisterPage {...props} />}
          />
          <Route
            path="/home-page"
            render={(props) => <HomePage {...props}/>}
          />
          <Redirect to="/home-page" />
          <Redirect from="/" to="/home-page" />
          <Redirect from="/index" to="/home-page" />
        </Switch>
      </Switch>
    </BrowserRouter>
  </Provider>
);
