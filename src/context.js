import React from "react";
import { useContext, useState, useEffect, useReducer } from "react";

import reducer from "./reducer";

import { shoppingData } from "./data";

const AppContext = React.createContext();

// const initialState = {
//   loading: false,
//   cart: shoppingData,
//   total: 0,
//   totalAmount: 0,
// };

const AppProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [cart, setCart] = useState(shoppingData);
  const [totalAmount, setTotalAmout] = useState(0);

  const [showSideBar, setShowSideBar] = useState(false);

  const [addCart, setAddCart] = useState([]);

  const handleToggle = () => {
    setShowSideBar(!showSideBar);
  };

  const filterBtn = (btn) => {
    if (btn === "all") {
      setCart(shoppingData);
    } else {
      setCart(shoppingData);
      const newData = shoppingData.filter((item) => item.category === btn);
      setCart(newData);
    }
  };

  const hideNav = () => {
    setShowSideBar(false);
  };

  const addToCart = (name, img, price, amount, id) => {
    setAddCart([...addCart, { id, name, img, amount, price }]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addCart));
  }, [addCart]);

  return (
    <AppContext.Provider
      value={{
        handleToggle,
        cart,
        showSideBar,
        totalAmount,
        filterBtn,
        shoppingData,
        hideNav,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
