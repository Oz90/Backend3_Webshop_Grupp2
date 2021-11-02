import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { BsCart3 } from 'react-icons/bs';
import { AuthContext } from '../../context/AuthContext';

export const CartIcon = () => {
  const { cartItemAmount } = useContext(AuthContext);
  useEffect(() => {
  }, [cartItemAmount]);


  const StyledBtn = styled.button`
  background-color: inherit;
  margin-right: .7rem;
  width: 50px;
  height: 40px;
  border: none;
  cursor: pointer;
  position: relative;
  `

  const StyledNotification = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  z-index: 99;
  position: absolute;
  margin-top: 0;
  color: white;
  margin-left: 30px;
  `
  return (
    <StyledBtn>
        <StyledNotification>{cartItemAmount}</StyledNotification>
        <BsCart3 size={40} />
    </StyledBtn>
  ) 
};

