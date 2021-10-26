import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../fetches/fetches';
import { AuthContext } from '../../context/AuthContext';
import styled from 'styled-components';


const StyledBtn = styled.button`
background-color: inherit;
color: white;
margin-right: 1.5rem;
border: none;
cursor: pointer;
font-size: 1rem;
font-weight: 300;
letter-spacing: 1.4px;
transition: all .2s ease-in-out;
&:hover {
    transform: scale(1.1);
  }
  `

export default function LogoutButton() {
  const { getIsUserLoggedIn, getIsAdminLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function logout () {
    await logoutUser();
    await getIsUserLoggedIn();
    await getIsAdminLoggedIn();
    history.push('/login');
  }

  return (

      <StyledBtn onClick={logout}>Sign out</StyledBtn>

  );
}
