import React, { useContext } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { authContext } from "../auth/provideAuth";

export function PrivateRoute({ children, ...rest }) {
  const location = useLocation();
  const auth = useContext(authContext);
  return (
    <Route
      {...rest}
      render={() =>
        auth.isLoggedIn ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}
