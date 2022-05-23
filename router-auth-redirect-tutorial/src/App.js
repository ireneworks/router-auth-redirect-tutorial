import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Public from "./pages/public";
import Private from "./pages/private";
import Login from "./pages/login";
import { PrivateRoute } from "./pages/privateRoute";
import { ProvideAuth } from "./auth/provideAuth";
import LoginState from "./pages/loginState";

export default function App() {
  return (
    <ProvideAuth>
      <LoginState />
      <ul>
        <li>
          <Link to="/public">public</Link>
        </li>
        <li>
          <Link to="/private">private</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/public" component={Public} />
        <PrivateRoute path="/private">
          <Private />
        </PrivateRoute>
        <Route path="/login" component={Login} />
      </Switch>
    </ProvideAuth>
  );
}
