import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function LogoutButton() {
  const { getIsUserLoggedIn, getIsAdminLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  async function logout() {
    await axios.get("http://localhost:5000/users/logout");
    await getIsUserLoggedIn();
    await getIsAdminLoggedIn();
    history.push("/login");
  }
  return (
    <button
      className="btn btn-logout new-note-btn btn-secondary"
      onClick={logout}
    >
      Logout
    </button>
  );
}
