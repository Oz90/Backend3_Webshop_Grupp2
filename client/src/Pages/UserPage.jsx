import React, { useState, useEffect } from "react";
import { getUser } from '../fetches/fetches';
import UserTableContainer from "../components/UserTable/UserTableContainer";
import { EditUserForm } from "../components/EditUserForm/EditUserForm";


export const UserPage = () => {
  const [userData, setUserData] = useState(undefined);

  const [editUser, setEditUser] = useState(false);

  async function getUserData() {
    const fetchedUserData = await getUser()
    console.log(fetchedUserData)
    setUserData(fetchedUserData.data);
  }

  useEffect(() => {
    getUserData()
   
  }, []);

  return (
    <>
      {userData ?
        editUser ? 
          <EditUserForm userData={userData} setEditUser={setEditUser} /> 
          :
        <UserTableContainer userData={userData} setEditUser={setEditUser} />
        :
        <p>Laddar... </p>

      }

    </>
  );
};
