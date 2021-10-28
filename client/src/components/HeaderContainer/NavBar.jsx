import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../images/dressi-logo-2.png"
import { BsCart3 } from "react-icons/bs"
import { AuthContext } from "../../context/AuthContext"
import LogoutButton from "../LoginForm/LogoutButton"
import Colors from "../../styleAssets/Colors"
import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
  StyledBtn,
  StyledNotification,
} from "./NavbarStyled"

export const NavBar = () => {
  const { loggedInUser, loggedInAdmin } = useContext(AuthContext)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Logo>
        </Left>
        {/*  <Center>
                <SearchContainer>
                    <HiSearch /> <Input />
                </SearchContainer>
            </Center> */}
        <Right>
          {loggedInUser || loggedInAdmin ? (
            <>
              <LogoutButton />
              <Link to="/user">
                <StyledBtn>Profile</StyledBtn>
              </Link>
              {loggedInAdmin ? (
                <Link to="/admin">
                  <StyledBtn>Admin</StyledBtn>
                </Link>
              ) : null}
              <Link to="/cart">
                <StyledBtn>
                  <StyledNotification>1</StyledNotification>
                  <BsCart3 size={25} />
                </StyledBtn>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <StyledBtn>Log in</StyledBtn>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  )
}
