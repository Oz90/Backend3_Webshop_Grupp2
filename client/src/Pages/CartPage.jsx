import React, { useState, useEffect } from "react";

import { getCart } from '../fetches/fetches';

import { CartCard } from "../components/Cart/CartCard";

export const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart().then(res => setCart(res.data))
  }, []);
    
  return (
    <>
      {cart.length > 0
      ?
      cart.map((item) => {
        return <CartCard key={item._id} props={item} />
      })
      :
      <p>Empty</p>
      }
    </>
  );
};
