import React from 'react'

import styled from 'styled-components';

const StyledNav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const StyledImage = styled.img`
width: 50px;
height: 50px;
background-color: red;
`

const StyledTitle = styled.div`


`

const StyledBtnContainer = styled.div`

`

const StyledBtn = styled.button`
margin-right: .7rem;
`

export const NavBar = () => {
    return (
        <StyledNav>
            <StyledImage src="" alt="" />
            <StyledTitle><h1>MONKI 2.0</h1></StyledTitle>
            <StyledBtnContainer>
                <StyledBtn>Sign in</StyledBtn>
                <StyledBtn>Sign out</StyledBtn>
                <StyledBtn>Admin</StyledBtn>
                <button>
                    <img src="" alt="" />
                </button>
            </StyledBtnContainer>
        </StyledNav>
    )
}
