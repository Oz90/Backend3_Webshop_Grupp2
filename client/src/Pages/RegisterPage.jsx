import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { registerUser } from '../fetches/fetches';
import Colors from '../styleAssets/Colors'
import { Message } from '../components/FeedbackMessages/FeedbackMessages'

import {
  FormContainerStyled,
  FormStyled,
  InputStyled
} from '../components/Form/FormStyled';

import { InputPrimary } from '../components/Buttons/ButtonsStyled'

export const RegisterPage = () => {
  const [registerValue, setRegisterValue] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);

  const history = useHistory();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    registerUser(registerValue)
      .then(() => {
        history.push('/login');
      })
      .catch((error) => {
        setErrorMsg(error.response.data.errorMessage);
      });
  };

  const handleOnChange = (e) => {
    setRegisterValue({ ...registerValue, [e.target.name]: e.target.value });
  };

  return (
    <FormContainerStyled>
      <FormStyled onSubmit={handleOnSubmit} onChange={handleOnChange}>
        <InputStyled name="email" type="email" placeholder="Email" />
        <InputStyled name="password" type="password" placeholder="Password" />
        <InputStyled name="fullName" type="text" placeholder="Full Name" />
        <InputStyled name="displayName" type="text" placeholder="Display Name" />
        <InputStyled name="phoneNumber" type="number" placeholder="Phone Number" />
        <InputStyled name="address" type="text" placeholder="Address" />
        <InputStyled name="city" type="text" placeholder="City" />
        <InputStyled name="zipcode" type="number" placeholder="ZIP Code" />
        <InputPrimary type="submit" value="Register" />
      </FormStyled>
      {errorMsg && <Message type={Colors.danger} >{errorMsg}</Message>}
    </FormContainerStyled>
  );
};
