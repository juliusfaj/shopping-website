import React from "react";

import { useGlobalContext } from "../context";

const Product = () => {
  const { cart } = useGlobalContext();

  return <div>{console.log(cart)}</div>;
};

export default Product;
