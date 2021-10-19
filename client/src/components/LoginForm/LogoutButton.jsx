import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../fetches/fetches';
import { AuthContext } from '../../context/AuthContext';

export default function LogoutButton() {
  const { getIsUserLoggedIn, getIsAdminLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function logout() {
    logoutUser();
    await getIsUserLoggedIn();
    await getIsAdminLoggedIn();
    history.push('/login');
  }

  return (
    <button
      className="btn btn-logout new-note-btn btn-secondary"
      onClick={logout}
      type="button"
    >
      Logout
    </button>
  );
}
