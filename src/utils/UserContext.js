import React, { createContext, useState } from "react";

//create my context
export const UserContext = createContext(null);

//create a context provider
export const UserContextProvider = (props) => {
    const [userState, setUserState] = useState('Login')

    const value = {
        userState,
        setUserState,
    }

  return (<UserContext.Provider value={value}>{props.children}</UserContext.Provider>);
};
  