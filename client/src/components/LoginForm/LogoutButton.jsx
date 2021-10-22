import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../fetches/fetches';
import { AuthContext } from '../../context/AuthContext';
import styled from 'styled-components';


const StyledBtn = styled.button`
background-color: inherit;
margin-right: .7rem;
width: 50px;
height: 40px;
border: none;
cursor: pointer;
position: relative;`

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
