import React from "react";
import {
  ListContainerStyledWide,
  TextStyled,
  ListStyled,
  TitleStyled
} from '../../components/Details/DetailsStyled'

import { ButtonPrimary } from '../Buttons/ButtonsStyled'
import { ButtonContainer } from '../Buttons/ButtonContainer'
import { useHistory } from 'react-router-dom';

export default function UserTableContainer({ userData, setEditUser }) {
  let history = useHistory()

  const handleOnEditClick = (e) => {
    history.push("/user/edit")
  }
  const handleOnOrderClick = (e) => {
    history.push("/user/order")
  }

  return (
    <>
      <ListContainerStyledWide>
        <ButtonContainer>
          <ButtonPrimary onClick={handleOnEditClick}>Edit</ButtonPrimary>
          <ButtonPrimary onClick={handleOnOrderClick}>Orders</ButtonPrimary>
        </ButtonContainer>
        <ListStyled>
          <TitleStyled>Display Name</TitleStyled>
          <TextStyled>{userData?.displayName}</TextStyled>
          <TitleStyled>Full Name</TitleStyled>
          <TextStyled>{userData?.fullName}</TextStyled>
          <TitleStyled>Email</TitleStyled>
          <TextStyled>{userData?.email}</TextStyled>
          <TitleStyled>Phone Number</TitleStyled>
          <TextStyled>{userData?.phoneNumber}</TextStyled>
          <TitleStyled>Address</TitleStyled>
          <TextStyled>{userData?.address}</TextStyled>
          <TitleStyled>Zip Code</TitleStyled>
          <TextStyled>{userData?.zipcode}</TextStyled>
          <TitleStyled>City</TitleStyled>
          <TextStyled>{userData?.city}</TextStyled>
        </ListStyled>
      </ListContainerStyledWide>
    </>
  )
}
