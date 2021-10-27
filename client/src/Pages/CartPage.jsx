import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { getCart, getSingleProduct, placeOrder, deleteCart } from '../fetches/fetches';

import { CartCard } from '../components/Cart/CartCard';
import { CartContentsStyled } from '../components/Cart/CartContentsStyled';
import { CartSummaryStyled, PlaceOrderButtonStyled } from '../components/Cart/CartSummaryStyled';
import Colors from '../styleAssets/Colors'
import { Message } from '../components/FeedbackMessages/FeedbackMessages'

export const CartPage = () => {
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState(null);
  const { cartItemAmount, setCartItemAmount } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [newCartItemsAmount, setNewCartItemsAmount] = useState([]);
  const [totalCartItemsAmount, setTotalCartItemsAmount] = useState(0);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCart([]);
    getCart()
      .then(res => setCart(res.data));
  }, []);

  useEffect(() => {
    setProducts([]);
    cart.map((item) => {
      getSingleProduct(item._id)
        .then(res => setProducts(products => [...products, { ...res.data, amount: item.amount }]));
    });
  }, [cart]);

  useEffect(() => {
    setTotal(0);
    products.map((item) => {
      setTotal(total + (item.price * item.amount));
    });
  }, [products]);


  // Tried to fix the cartitem amount for the "red bubble", code lines 41-58.
  useEffect(() => {
    setNewCartItemsAmount(cart.map((item) => item.amount));
    console.log(newCartItemsAmount);
  }, [cart])

  useEffect(() => {
    setTotalCartItemsAmount(newCartItemsAmount.reduce((sum, num) => {
      return sum + num;
    }, 0));
  }, [newCartItemsAmount])

  useEffect(() => {
    console.log("Total: " + totalCartItemsAmount)
    setCartItemAmount(totalCartItemsAmount);
  }, [totalCartItemsAmount])

  const handlePlaceOrder = (e) => {
    placeOrder({totalSum: total})
      .then(() => {
        deleteCart();
        history.push('/');
      })
      .catch((error) => {
        setErrorMsg(error.response.data.errorMessage);
      });
  };

  return (
    <>
      <CartContentsStyled>
        {products.length > 0
          ?
          products.map((item) => {
            return <CartCard key={item._id} props={item} />
          })
          :
          <p>Cart = empty</p>
        }
        {errorMsg && <Message type={Colors.danger}>{errorMsg}</Message>}
      </CartContentsStyled>
      <CartSummaryStyled>
        <p>Sum: {total}:-</p>
        <PlaceOrderButtonStyled onClick={handlePlaceOrder}>Place Order</PlaceOrderButtonStyled>
      </CartSummaryStyled>
    </>
  );
};
