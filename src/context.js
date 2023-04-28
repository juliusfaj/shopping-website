import React from "react";
import { useContext, useState, useEffect, useReducer } from "react";

import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  totalAmount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [showSideBar, setShowSideBar] = useState(false);

  const handleToggle = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <AppContext.Provider value={{ handleToggle, ...state, showSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
