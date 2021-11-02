import React, { useState, useEffect } from "react";
import { getUser } from '../fetches/fetches';
import UserTableContainer from "../components/UserTable/UserTableContainer";
import { MiddleColumnStyled } from '../components/Details/DetailsStyled';

export const UserPage = () => {
  const [userData, setUserData] = useState(undefined);

  async function getUserData() {
    const fetchedUserData = await getUser()
    setUserData(fetchedUserData.data);
  }

  useEffect(() => {
    getUserData()

  }, []);



  return (
    <>
      <MiddleColumnStyled>
       

      {userData ?
          <UserTableContainer userData={userData} />
          :
          <p>Laddar... </p>
        }
        </MiddleColumnStyled>
    </>
  );
};
