import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../../images/dress.svg"
import { BsCart3 } from 'react-icons/bs';
import { AuthContext } from '../../context/AuthContext';
import LogoutButton from "../LoginForm/LogoutButton"



const StyledNav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const StyledImage = styled.img`
width: 50px;
height: 50px;
margin-left: 2rem;
`

const StyledCartBtn = styled.button`
width: 0px;
height: 0px;
margin-right: 1rem;
background-color: inherit;
position: relative;
`


const StyledTitle = styled.div`


`

const StyledBtnContainer = styled.div`
display: flex;
justify-content: center;
margin-right:2rem;
`

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

export const NavBar = () => {
    const { loggedInUser, loggedInAdmin } = useContext(AuthContext);

    return (
        <StyledNav>
            <StyledImage src={logo} alt="" />
            <StyledTitle><h1>MONKI 2.0</h1></StyledTitle>
            <StyledBtnContainer>
                {loggedInUser || loggedInAdmin ? (<>
                    <LogoutButton />
                    <Link to="/user"><StyledBtn>Profil</StyledBtn></Link>
                    {loggedInAdmin ? (<Link to="/admin"><StyledBtn>Admin</StyledBtn></Link>) : null}
                    <Link to="/cart">
                        <StyledBtn>
                            <StyledNotification>1</StyledNotification>
                            <BsCart3 size={40} />
                        </StyledBtn>
                    </Link>
                </>) : (<>
                    <Link to="/login">
                        <StyledBtn>Sign in</StyledBtn>
                    </Link>
                </>)
                }
            </StyledBtnContainer>
        </StyledNav>
    )
}
