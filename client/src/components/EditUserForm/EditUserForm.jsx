import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { editUser } from '../../fetches/fetches';

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

export const EditUserForm = ({ userData, setEditUser }) => {
  const [editValue, setEditValue] = useState(userData);
  const [errorMessageResponse, setErrorMessageResponse] = useState()

  let history = useHistory()

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { address, city, fullName, displayName, email, phoneNumber, zipcode } = editValue
    const payload = { address, city, fullName, displayName, email, phoneNumber, zipcode }
    try {
      const response = await editUser(payload);
      history.push('/user');
    } catch (error) {
      setErrorMessageResponse(error.response.data);
    }
  };

  const handleOnCancel = (e) => {
    history.push("/user")
  }

  const handleOnChange = (e) => {
    setEditValue({ ...editValue, [e.target.name]: e.target.value });
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledInput name="email" type="email" value={editValue.email} onChange={handleOnChange} />
        <StyledInput name="fullName" type="text" value={editValue.fullName} onChange={handleOnChange} />
        <StyledInput
          name="displayName"
          type="text"
          value={editValue.displayName}
          onChange={handleOnChange}
        />
        <StyledInput
          name="phoneNumber"
          type="number"
          value={editValue.phoneNumber}
          onChange={handleOnChange}
        />
        <StyledInput name="address" type="text" value={editValue.address} onChange={handleOnChange} />
        <StyledInput name="city" type="text" value={editValue.city} onChange={handleOnChange} />
        <StyledInput name="zipcode" type="number" value={editValue.zipcode} onChange={handleOnChange} />
        <button type="submit">Save</button>
        <button onClick={handleOnCancel} type="button">Cancel</button>
        {errorMessageResponse?.errorMessage}
      </StyledForm>
    </StyledDiv>
  );
};
