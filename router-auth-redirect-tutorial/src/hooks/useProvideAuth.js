import { useState } from "react";

export default function useProvideAuth() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const logIn = () => {
    setLoggedIn(true);
    return console.log("로그인되었습니다.");
  };
  const logOut = () => {
    setLoggedIn(false);
    return console.log("로그아웃되었습니다.");
  };

  return { isLoggedIn, logIn, logOut };
}
