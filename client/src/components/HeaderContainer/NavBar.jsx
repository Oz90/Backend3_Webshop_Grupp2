import React, { useContext } from "react"
import { Link } from "react-router-dom"
import logo from "../../images/dressi-logo-2.png"
import { BsCart3 } from "react-icons/bs"
import { AuthContext } from "../../context/AuthContext"
import LogoutButton from "../LoginForm/LogoutButton"
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
