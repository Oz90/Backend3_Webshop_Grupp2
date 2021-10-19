import React, { useState } from 'react';
import styled from 'styled-components';
import { registerUser } from '../../fetches/fetches';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh */
`;

const StyledInput = styled.input``;

export const RegisterForm = () => {
  const [registerValue, setRegisterValue] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    registerUser(registerValue);
  };

  const handleOnChange = (e) => {
    setRegisterValue({ ...registerValue, [e.target.name]: e.target.value });
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleOnSubmit} onChange={handleOnChange}>
        <StyledInput name="email" type="email" placeholder="Email" />
        <StyledInput name="password" type="password" placeholder="Password" />
        <StyledInput name="fullName" type="text" placeholder="Full Name" />
        <StyledInput
          name="displayName"
          type="text"
          placeholder="Display Name"
        />
        <StyledInput
          name="phoneNumber"
          type="number"
          placeholder="Phone Number"
        />
        <StyledInput name="address" type="text" placeholder="Adress" />
        <StyledInput name="city" type="text" placeholder="City" />
        <StyledInput name="zipcode" type="number" placeholder="ZIP Code" />
        <button type="submit">Register</button>
      </StyledForm>
    </StyledDiv>
  );
};
