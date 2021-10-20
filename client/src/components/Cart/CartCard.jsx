import React from 'react';

import {
  CartCardContainer,
} from './CartCardStyled';

export const CartCard = ({ props }) => {

  return (
    <CartCardContainer>
      <p>{props._id}</p>
    </CartCardContainer>
  ) 
};

