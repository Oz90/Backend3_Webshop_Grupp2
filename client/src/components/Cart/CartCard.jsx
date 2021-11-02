import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { removeCartItem, updateCart } from '../../fetches/fetches';
import { ConfirmInput, RemoveButton } from '../../components/Buttons/ButtonsStyled';
import { ButtonContainerBottom } from '../../components/Buttons/ButtonContainer';
import { PriceP, HeaderTwo } from '../../components/Texts/TextsStyled';
import { InputStyled, LabelStyled } from '../../components/Form/FormStyled'
import {
  CartCardContainer,
  CartCardImage,
  CartCardInfo,
  AmountForm,
  FlexRow
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
        <PriceP>{props.price} SEK</PriceP>
        <AmountForm onSubmit={handleOnSubmit}>
          <FlexRow>
            <div>
              <LabelStyled htmlFor="amount">Amount: </LabelStyled>
              <InputStyled onChange={handleOnChange} name="amount" type="number" value={productAmount} />
            </div>
            <ConfirmInput type="submit" value="✓" />
          </FlexRow>
        </AmountForm>
        <ButtonContainerBottom>
          <RemoveButton type="button" onClick={handleDeleteCartItem}>x</RemoveButton>
        </ButtonContainerBottom>
      </CartCardInfo>
    </CartCardContainer>
  )
};

