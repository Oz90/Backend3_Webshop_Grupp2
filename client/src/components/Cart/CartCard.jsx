import React, { useState } from 'react';

import { removeCartItem } from '../../fetches/fetches';

import {
  CartCardContainer,
  CartCardImage,
  CartCardInfo,
  AmountForm,
  AmountInput,
  AmountSubmit,
} from './CartCardStyled';

export const CartCard = ({ props }) => {
  const [productAmount, setProductAmount] = useState(props.amount);

  const handleDeleteCartItem = () => {
    removeCartItem(props._id);
  };

  const handleOnChange = (e) => {
    setProductAmount(e.target.value);
  };

  return (
    <CartCardContainer>
      <CartCardImage src={props.thumbnail} alt={props.title} />
      <CartCardInfo>
        <p>{props.title}</p>
        <AmountForm>
          <label for="amount">Amount: </label>
          <AmountInput name="amount" type="number" value={productAmount}/>
          <AmountSubmit type="submit" value="Update"/>
        </AmountForm>
        <p>{props.price}</p>
        <button type="button" onClick={handleDeleteCartItem}>Remove from cart</button>
      </CartCardInfo>
    </CartCardContainer>
  ) 
};

