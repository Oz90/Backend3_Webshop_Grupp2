import React, { useState } from 'react';
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

export const EditUserForm = ({ userData }) => {
  const [editValue, setEditValue] = useState(userData);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    editUser(editValue);
  };

  const handleOnChange = (e) => {
    setEditValue({ ...editValue, [e.target.name]: e.target.value });
  };

  setEditValue({ ...editValue, "password": "" })

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleOnSubmit} onChange={handleOnChange}>
        <StyledInput name="email" type="email" value={editValue.email} />
        <StyledInput name="password" type="password" value={editValue.password} />
        <StyledInput name="fullName" type="text" value={editValue.fullName} />
        <StyledInput
          name="displayName"
          type="text"
          value={editValue.displayName}
        />
        <StyledInput
          name="phoneNumber"
          type="number"
          value={editValue.phoneNumber}
        />
        <StyledInput name="address" type="text" value={editValue.address} />
        <StyledInput name="city" type="text" value={editValue.city} />
        <StyledInput name="zipcode" type="number" value={editValue.zipcode} />
        <button type="submit">edit</button>
      </StyledForm>
    </StyledDiv>
  );
};
