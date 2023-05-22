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

  const [alertMSG, setAlertMSG] = useState({
    bool: false,
    msg: "added to cart",
    status: "lightgreen",
  });

  const handleAlert = (bool, msg, status) => {
    setAlertMSG({ bool, msg, status });
  };

  const getPayment = () => {
    const pay = cartItems.reduce((total, item) => {
      const { price, amount } = item;
      const totalPay = amount * price;
      total += totalPay;
      return total;
    }, 0);
    setPayment(pay);
  };

  useEffect(() => {
    getPayment();
  }, [cartItems]);

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
    handleAlert(false, "cart cleared", "rgb(250, 111, 111)");
  };

  const addToCart = (name, img, price, amount) => {
    setAddCart([
      ...addCart,
      { id: new Date().getTime().toString(), name, img, price, amount },
    ]);

    handleAlert(true, "added to cart", "lightgreen");
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

  const clearCart = () => {
    setAddCart([]);
    handleAlert(true, "cart cleared", "rgb(250, 111, 111)");
  };

  const removeItem = (id) => {
    const filterItems = addCart.filter((item) => item.id !== id);
    setAddCart(filterItems);
    handleAlert(true, "item removed", "rgb(250, 111, 111)");
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
        clearCart,
        removeItem,
        alertMSG,
        handleAlert,
        addCart,
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
