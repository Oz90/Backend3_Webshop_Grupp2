import React from 'react';

import {
  CartCardContainer,
  CartCardImage,
  CartCardInfo,
} from './CartCardStyled';

export const CartCard = ({ props }) => {

  return (
    <CartCardContainer>
      <CartCardImage src={props.thumbnail} alt={props.title} />
      <CartCardInfo>
        <p>{props.title}</p>
        <p>{props.amount}</p>
        <p>{props.price}</p>
      </CartCardInfo>
    </CartCardContainer>
  ) 
};

