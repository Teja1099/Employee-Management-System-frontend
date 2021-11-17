import React, { useEffect, useCallback, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  isAdmin: false,
  login: (token) => {},
  logout: () => {},
  admin: (role) => {},
});

const calcRemTime = (expirationTime) => {
  const crtTime = new Date().getTime();
  const adjExpTime = new Date(expirationTime).getTime();

  const exp = adjExpTime - crtTime;
  return exp;
};

const retrieveStoredToken = () => {
  const token = localStorage.getItem("USER_KEY");
  const expirationDuration = localStorage.getItem("expirationTime");
  const role = localStorage.getItem("USER_ROLE");

  const remTime = calcRemTime(expirationDuration);

  if (remTime <= 3600) {
    localStorage.removeItem("USER_KEY");
    localStorage.removeItem("USER_ROLE");
    localStorage.removeItem("expirationTime");
    console.log("here");
    return null;
  }

  return {
    storedToken: token,
    storedExpTime: remTime,
    storedRole: role,
  };
};

export const AuthContextProvider = (props) => {
  const storedData = retrieveStoredToken();
  let initialValue;
  let initialRole;
  if (storedData) {
    initialValue = storedData.storedToken;
    initialRole = storedData.storedRole;
  }
  const [token, setToken] = useState(initialValue);
  const [isAdmin, setIsAdmin] = useState(initialRole);

  // is token empty string  then false
  const userIsloggedIn = !!token;

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("USER_KEY");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("USER_ROLE");
    setToken(null);
    setIsAdmin(false);

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (tok, expirationTime) => {
    localStorage.setItem("USER_KEY", tok);
    localStorage.setItem("expirationTime", expirationTime);
    setToken(tok);

    const remTime = calcRemTime(expirationTime);
    console.log(remTime);
    logoutTimer = setTimeout(logoutHandler, remTime);
  };

  const adminHandler = (role) => {
    if (role === "ADMIN") {
      setIsAdmin(true);
      localStorage.setItem("USER_ROLE", true);
    } else {
      setIsAdmin(false);
      localStorage.setItem("USER_ROLE", false);
    }
  };

  useEffect(() => {
    if (storedData) {
      console.log(storedData.storedExpTime);
      logoutTimer = setTimeout(logoutHandler, storedData.storedExpTime);
    }
  }, [storedData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsloggedIn,
    isAdmin: isAdmin,
    login: loginHandler,
    logout: logoutHandler,
    admin: adminHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
