import React, { createContext, useState } from "react";

//create my context
export const UserContext = createContext(null);

//create a context provider
export const UserContextProvider = (props) => {
    const [userState, setUserState] = useState('Login')
    //dark mode and light mode
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme((prev) => prev === "light" ? "dark" : "light")
    }

    const value = {
        userState,
        setUserState,
        theme,
        toggleTheme,
    }

  return (<UserContext.Provider value={value}>{props.children}</UserContext.Provider>);
};
  