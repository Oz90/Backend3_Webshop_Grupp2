import React from "react";
import {
  ListContainerStyledWide,
  TextStyled,
  ListStyled,
  TitleStyled
} from '../../components/Details/DetailsStyled'

export default function UserTableContainer({ userData, setEditUser }) {

  return (
    <>
      <ListContainerStyledWide>
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
