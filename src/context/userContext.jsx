import React from "react";
import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserContextProvider = (props) => {
  const [isUserOnline, setIsUserOnline] = useState(false);
  const changeUserLogin = () => {
    setIsUserOnline(!isUserOnline);
    console.log("state changed");
  };
  return (
    <UserContext.Provider value={{ changeUserLogin, isUserOnline }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
