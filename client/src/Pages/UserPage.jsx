import React, { useState, useEffect } from "react";
import { getUser } from '../fetches/fetches';
import { useHistory } from 'react-router-dom';
import UserTableContainer from "../components/UserTable/UserTableContainer";

import { ButtonStyled, MiddleColumnStyled } from '../components/Details/DetailsStyled';
import { ButtonPrimary } from '../components/Buttons/ButtonsStyled'

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
        <ButtonPrimary onClick={handleOnEditClick}>Edit</ButtonPrimary>
        <ButtonPrimary onClick={handleOnOrderClick}>Orders</ButtonPrimary>

      {userData ?
          <UserTableContainer userData={userData} />
          :
          <p>Laddar... </p>
        }
        </MiddleColumnStyled>
    </>
  );
};
