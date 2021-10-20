import React, { useState, useEffect } from "react";

import { getCart } from '../fetches/fetches';

import { CartCard } from "../components/Cart/CartCardStyled";

export const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart().then(res => setCart(res.data))
  }, []);
    
  return (
    <>
      {cart.length > 0
      ?
      cart.map((item, index) => {
        return <p key={index}>{item._id}</p>
      })
      :
      <p>0</p>
      }
    </>
  );
};
