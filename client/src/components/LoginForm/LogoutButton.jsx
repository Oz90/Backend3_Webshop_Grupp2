import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../fetches/fetches';
import { AuthContext } from '../../context/AuthContext';
import { LogoutButtonStyled } from '../Buttons/ButtonsStyled';

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

    <LogoutButtonStyled onClick={logout}>Log out</LogoutButtonStyled>

  );
}
