import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { editUser } from '../../fetches/fetches';
import {
  FormContainerStyledWide,
  FormStyled,
  InputStyled,
  LabelStyled,
} from '../../components/Form/FormStyled'
import Colors from '../../styleAssets/Colors'
import { Message } from '../FeedbackMessages/FeedbackMessages';
import { ButtonDanger, ButtonSuccess } from '../../components/Buttons/ButtonsStyled';
import { ButtonContainer} from '../../components/Buttons/ButtonContainer';
import { HeaderOne } from '../../components/Texts/TextsStyled';


export const EditUserForm = ({ userData, setEditUser }) => {
  const [editValue, setEditValue] = useState(userData);
  const [errorMessageResponse, setErrorMessageResponse] = useState()

  let history = useHistory()

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { address, city, fullName, displayName, email, phoneNumber, zipcode } = editValue
    const payload = { address, city, fullName, displayName, email, phoneNumber, zipcode }
    try {
      await editUser(payload);
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
    <FormContainerStyledWide>
      <FormStyled onSubmit={handleOnSubmit}>
        <HeaderOne>Edit Your Profile</HeaderOne>
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
        <ButtonContainer>
          <ButtonSuccess type="submit">Save</ButtonSuccess>
          <ButtonDanger onClick={handleOnCancel} type="button">Cancel</ButtonDanger>
        </ButtonContainer>
        {errorMessageResponse && <Message type={Colors.danger}>{errorMessageResponse.errorMessage}</Message>}
      </FormStyled>
    </FormContainerStyledWide>
  );
};
