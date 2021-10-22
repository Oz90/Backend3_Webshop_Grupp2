import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { editUser } from '../../fetches/fetches';
import {
  FormContainerStyled,
  FormStyled,
  InputStyled,
  SubmitStyled,
  ButtonStyled,
  LabelStyled,
} from '../../components/Form/FormStyled'

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
    <FormContainerStyled>
      <FormStyled onSubmit={handleOnSubmit}>
        <LabelStyled for="email">Email</LabelStyled>
        <InputStyled name="email" type="email" value={editValue.email} onChange={handleOnChange} />
        <LabelStyled for="fullName">Full Name</LabelStyled>
        <InputStyled name="fullName" type="text" value={editValue.fullName} onChange={handleOnChange} />
        <LabelStyled for="displayName">Display Name</LabelStyled>
        <InputStyled
          name="displayName"
          type="text"
          value={editValue.displayName}
          onChange={handleOnChange}
        />
        <LabelStyled for="phoneNumber">Phone Number</LabelStyled>
        <InputStyled
          name="phoneNumber"
          type="number"
          value={editValue.phoneNumber}
          onChange={handleOnChange}
        />
        <LabelStyled for="address">Address</LabelStyled>
        <InputStyled name="address" type="text" value={editValue.address} onChange={handleOnChange} />
        <LabelStyled for="city">City</LabelStyled>
        <InputStyled name="city" type="text" value={editValue.city} onChange={handleOnChange} />
        <LabelStyled for="zipcode">Zipcode</LabelStyled>
        <InputStyled name="zipcode" type="number" value={editValue.zipcode} onChange={handleOnChange} />
        <ButtonStyled type="submit">Save</ButtonStyled>
        <ButtonStyled onClick={handleOnCancel} type="button">Cancel</ButtonStyled>
        {errorMessageResponse?.errorMessage}
      </FormStyled>
    </FormContainerStyled>
  );
};
