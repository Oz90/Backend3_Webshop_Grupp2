import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { removeCartItem, updateCart } from '../../fetches/fetches';

import {
  CartCardContainer,
  CartCardImage,
  CartCardInfo,
  AmountForm,
  AmountInput,
  AmountSubmit,
} from './CartCardStyled';

export const CartCard = ({ props }) => {
  const { cartItemAmount, setCartItemAmount } = useContext(AuthContext);
  const [productAmount, setProductAmount] = useState(props.amount);

  const history = useHistory();

  const handleDeleteCartItem = () => {
    removeCartItem(props._id);
    history.go(0);

  };

  const handleOnChange = (e) => {
    setProductAmount(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCartItemAmount(0);
    const payload = { amount: productAmount };
    updateCart(props._id, payload);
  };

  return (
    <CartCardContainer>
      <CartCardImage src={props.thumbnail} alt={props.title} />
      <CartCardInfo>
        <p>{props.title}</p>
        <AmountForm onSubmit={handleOnSubmit}>
          <label htmlFor="amount">Amount: </label>
          <AmountInput onChange={handleOnChange} name="amount" type="number" value={productAmount} />
          <AmountSubmit type="submit" value="Update" />
        </AmountForm>
        <p>{props.price}</p>
        <button type="button" onClick={handleDeleteCartItem}>Remove from cart</button>
      </CartCardInfo>
    </CartCardContainer>
  )
};

