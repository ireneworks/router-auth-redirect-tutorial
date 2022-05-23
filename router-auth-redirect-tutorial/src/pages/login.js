import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { authContext } from "../auth/provideAuth";

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state;
  const auth = useContext(authContext);
  const onClick = () => {
    auth.logIn();
    history.replace(from);
  };
  return (
    <>
      <button onClick={onClick}>로그인</button>
    </>
  );
}
