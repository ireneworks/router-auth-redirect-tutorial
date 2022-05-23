import React, { useContext } from "react";
import { authContext } from "../auth/provideAuth";
import { useHistory } from "react-router-dom";

export default function LoginState() {
  const history = useHistory();
  const auth = useContext(authContext);
  const onClick = () => {
    auth.logOut();
    history.replace("/");
  };

  return (
    <>
      {!auth.isLoggedIn && <p>로그인 되지 않았습니다.</p>}
      {auth.isLoggedIn && (
        <>
          <p>로그인 되었습니다.</p>
          <button onClick={onClick}>로그아웃</button>
        </>
      )}
    </>
  );
}
