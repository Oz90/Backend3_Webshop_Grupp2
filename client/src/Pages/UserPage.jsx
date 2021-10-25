import React, { useState, useEffect } from "react";
import { getUser } from '../fetches/fetches';
import { useHistory } from 'react-router-dom';
import UserTableContainer from "../components/UserTable/UserTableContainer";

import { ButtonStyled, MiddleColumnStyled } from '../components/Details/DetailsStyled'

export const UserPage = () => {
  const [userData, setUserData] = useState(undefined);

  let history = useHistory()

  async function getUserData() {
    const fetchedUserData = await getUser()
    console.log(fetchedUserData)
    setUserData(fetchedUserData.data);
  }

  useEffect(() => {
    getUserData()

  }, []);

  const handleOnEditClick = (e) => {
    history.push("/user/edit")
  }
  const handleOnOrderClick = (e) => {
    history.push("/user/order")
  }

  return (
    <>
      <MiddleColumnStyled>
        <ButtonStyled onClick={handleOnEditClick}>Edit</ButtonStyled>
        <ButtonStyled onClick={handleOnOrderClick}>Orders</ButtonStyled>
      </MiddleColumnStyled>

      {userData ?
        <MiddleColumnStyled>
          <UserTableContainer userData={userData} />

        </MiddleColumnStyled>
        :
        <p>Laddar... </p>
      }
    </>
  );
};
