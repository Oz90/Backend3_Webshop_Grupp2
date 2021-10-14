import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

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

export const LoginForm = () => {
  const [loginValue, setLoginValue] = useState({});
  const { getIsUserLoggedIn, getIsAdminLoggedIn } = useContext(AuthContext);

  const url = axios.create({ baseURL: "http://localhost:5000/" });

  const handleOnSubmit = e => {
    e.preventDefault();
    url.post("users/login", loginValue);
    getIsUserLoggedIn();
    getIsAdminLoggedIn();
  };

  const handleOnChange = e => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleOnSubmit} onChange={handleOnChange}>
        <StyledInput name="email" type="email" placeholder="Email" />
        <StyledInput name="password" type="password" placeholder="Password" />
        <button type="submit">Sign in</button>
      </StyledForm>
    </StyledDiv>
  );
};
