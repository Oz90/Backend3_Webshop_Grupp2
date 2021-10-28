import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { removeCartItem, updateCart } from '../../fetches/fetches';

import { InputPrimary, ButtonSecondary } from '../../components/Buttons/ButtonsStyled';
import { ButtonContainerBottom } from '../../components/Buttons/ButtonContainer';
import { HeaderThree, P, PriceP, HeaderTwo } from '../../components/Texts/TextsStyled';
import { InputStyled, LabelStyled } from '../../components/Form/FormStyled'


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
        <HeaderTwo>{props.title}</HeaderTwo>
        <AmountForm onSubmit={handleOnSubmit}>
          <LabelStyled htmlFor="amount">Amount: </LabelStyled>
          <InputStyled onChange={handleOnChange} name="amount" type="number" value={productAmount} />
          <InputPrimary type="submit" value="Confirm Amount" />
        </AmountForm>
        <PriceP>{props.price} SEK</PriceP>
        <ButtonContainerBottom>
          <ButtonSecondary type="button" onClick={handleDeleteCartItem}>Remove</ButtonSecondary>
        </ButtonContainerBottom>
      </CartCardInfo>
    </CartCardContainer>
  )
};

