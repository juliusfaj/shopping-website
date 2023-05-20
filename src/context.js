import React from "react";
import { useContext, useState, useEffect, useReducer } from "react";

import reducer from "./reducer";

import { shoppingData } from "./data";
import { json } from "react-router-dom";

const AppContext = React.createContext();

// const initialState = {
//   loading: false,
//   cart: shoppingData,
//   total: 0,
//   totalAmount: 0,
// };

const getLocalStorage = () => {
  let item = localStorage.getItem("cart");
  if (item) {
    return JSON.parse(item);
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [cart, setCart] = useState(shoppingData);
  const [totalAmount, setTotalAmout] = useState(0);

  const [showSideBar, setShowSideBar] = useState(false);

  const [addCart, setAddCart] = useState(getLocalStorage());

  const [cartItems, setCartItems] = useState([]);
  const [payment, setPayment] = useState(0);

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
    setAddCart([...addCart, { id, name, img, price, amount }]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addCart));
  }, [addCart]);

  const getCartItems = () => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    setCartItems(cartItem);
    setTotalAmout(cartItem.length);
  };

  useEffect(() => {
    getCartItems();
  }, [addCart]);

  // add to amound btn
  const addToAmount = (id) => {
    const getAmount = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCart(getAmount);
  };
  // remove from amount btn
  const subFromAmount = (id) => {
    const getAmount = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .map((item) => {
        if (item.amount === 0) {
          return { ...item, amount: 1 };
        }
        return item;
      });
    setCart(getAmount);
  };
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
        cartItems,
        addToAmount,
        subFromAmount,
        payment,
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
