import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { loginUser } from '../fetches/fetches';
import { AuthContext } from '../context/AuthContext';

import {
  FormContainerStyled,
  FormStyled,
  InputStyled,
  SubmitStyled,
} from '../components/Form/FormStyled';

export const LoginPage = () => {
  const [loginValue, setLoginValue] = useState({});
  const { getIsUserLoggedIn, getIsAdminLoggedIn } = useContext(AuthContext);
  // const history = useHistory();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // let path = '/';

    loginUser(loginValue);
    getIsUserLoggedIn();
    getIsAdminLoggedIn();
  };

  const handleOnChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  return (
    <FormContainerStyled>
      <FormStyled onSubmit={handleOnSubmit} onChange={handleOnChange}>
        <InputStyled name="email" type="email" placeholder="Email" />
        <InputStyled name="password" type="password" placeholder="Password" />
        <SubmitStyled type="submit" value="Sign in" />
      </FormStyled>
    </FormContainerStyled>
  );
};
