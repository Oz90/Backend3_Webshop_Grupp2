import React, {useState, useContext} from 'react'
import styled from 'styled-components';
import logo from "../../images/dress.svg"
import cart from "../../images/cart.png"
import { BsCart3 } from 'react-icons/bs';
import { AuthContext } from '../../context/AuthContext';


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
    console.log("Is logged in " + loggedInUser)

    return (
        <StyledNav>
            <StyledImage src={logo} alt="" />
            <StyledTitle><h1>MONKI 2.0</h1></StyledTitle>
            <StyledBtnContainer>
            {loggedInUser ?( <>
            <StyledBtn>Sign out</StyledBtn>
            <StyledBtn>Profil</StyledBtn>
            <StyledBtn>
                <StyledNotification>1</StyledNotification>
                 <BsCart3 size={40}/>
                </StyledBtn>
            </>) : (<>
            <StyledBtn>Sign in</StyledBtn>
            </>)
        } 
        {/* {loggedInAdmin ? (
            <>
             <StyledBtn>Sign out</StyledBtn>
             <StyledBtn>Admin</StyledBtn>
             <StyledBtn>
                <StyledNotification>1</StyledNotification>
                 <BsCart3 size={40}/>
                </StyledBtn>
            </>) : (
            <>
            
            </>)
        } */}

            </StyledBtnContainer>
        </StyledNav>
    )
}
