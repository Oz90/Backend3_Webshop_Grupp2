import React, { useState, useEffect } from 'react';

import { getCart, getSingleProduct } from '../fetches/fetches';

import { CartCard } from '../components/Cart/CartCard';

export const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    getCart()
      .then(res => setCart(res.data))
  }, []);

  useEffect(() => {
    setProducts([]);
    cart.map((item) => {
      getSingleProduct(item._id)
        .then(res => setProducts(products => [...products, {...res.data, amount: item.amount} ]))
    });
  }, [cart]);  
    
  return (
    <>
      {products.length > 0
      ?
      products.map((item) => {
        return <CartCard key={item._id} props={item} />
      })
      :
      <p>Cart = empty</p>
      }
    </>
  );
};
