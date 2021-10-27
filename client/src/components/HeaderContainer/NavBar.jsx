import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../../images/dressi-logo-2.png"
import { BsCart3 } from 'react-icons/bs';
import { AuthContext } from '../../context/AuthContext';
import LogoutButton from "../LoginForm/LogoutButton"
import Colors from "../../styleAssets/Colors"


const Container = styled.div`
    height: 100%;
    
`

const Wrapper = styled.div`
    height: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    justify-content: flex-start;
    margin-left: 1.5rem;
`
/* const Center = styled.div`
    flex: .1;
    display:flex;
    align-items: center;
    justify-content: center;
` */
const Right = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1.5rem;
`

const Logo = styled.span`
    
    img {
        height: 1.5rem;
    }
    a {
        color: ${Colors.white};
    }

`


const StyledBtn = styled.button`
    background-color: inherit;
    margin-right: 1.5rem;
    border: none;
    cursor: pointer;
    color: ${Colors.white};
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1.2px;
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }

    svg {
        color: ${Colors.white};
    }

`
const StyledNotification = styled.div`
    background-color: ${Colors.danger};
    letter-spacing: normal;
    font-size: .8rem;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    z-index: 99;
    position: absolute;
    margin-top: 0;
    color: ${Colors.white};
    margin-left: 15px;
`

export const NavBar = () => {
  const { loggedInUser, loggedInAdmin } = useContext(AuthContext)

    return (
        <Container>
            <Wrapper>
            <Left>
                    <Logo><Link to="/"><img src={logo} alt="" /></Link></Logo>
            </Left>
           {/*  <Center>
                <SearchContainer>
                    <HiSearch /> <Input />
                </SearchContainer>
            </Center> */}
            <Right>
                {loggedInUser || loggedInAdmin ? (<>
                    <LogoutButton />
                    <Link to="/user"><StyledBtn>Profile</StyledBtn></Link>
                    {loggedInAdmin ? (<Link to="/admin"><StyledBtn>Admin</StyledBtn></Link>) : null}
                    <Link to="/cart">
                        <StyledBtn>
                            <StyledNotification>1</StyledNotification>
                            <BsCart3 size={25} />
                        </StyledBtn>
                    </Link>
                </>) : (<>
                    <Link to="/login">
                        <StyledBtn>Log in</StyledBtn>
                    </Link>
                </>)
                }
                </Right>
            </Wrapper>
        </Container>
    )
}
