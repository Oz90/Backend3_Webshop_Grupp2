import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { loginUser } from '../fetches/fetches';
import { AuthContext } from '../context/AuthContext';

import {
  FormContainerStyled,
  FormStyled,
  InputStyled,
  SubmitStyled,
  ErrorMessageStyled,
} from '../components/Form/FormStyled';

export const LoginPage = () => {
  const [loginValue, setLoginValue] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const { getIsUserLoggedIn, getIsAdminLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const handleOnSubmit = (e) => {
    e.preventDefault();
   

    loginUser(loginValue)
      .then(() => {
        getIsUserLoggedIn();
        getIsAdminLoggedIn();
        history.push('/');
      })
      .catch((error) => {
        setErrorMsg(error.response.data.errorMessage);
      });

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
      {errorMsg && <ErrorMessageStyled>{errorMsg}</ErrorMessageStyled>}
    </FormContainerStyled>
  );
};
