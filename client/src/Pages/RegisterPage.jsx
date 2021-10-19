import React, { useState } from 'react';
import { registerUser } from '../fetches/fetches';

import {
  FormContainerStyled,
  FormStyled,
  InputStyled,
  SubmitStyled,
} from '../components/Form/FormStyled';

export const RegisterPage = () => {
  const [registerValue, setRegisterValue] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    registerUser(registerValue);
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
        <SubmitStyled type="submit" value="Register" />
      </FormStyled>
    </FormContainerStyled>
  );
};
