import React, { useState, useEffect } from "react";
import { addProduct } from '../fetches/fetches';
import styled from "styled-components";

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

export const AdminAddProductPage = () => {
    const [productValue, setProductValue] = useState({});

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addProduct(productValue);
    };

    const handleOnChange = (e) => {
        setProductValue({ ...productValue, [e.target.name]: e.target.value });
    };

    return (

        <StyledDiv>
            <StyledForm onSubmit={handleOnSubmit} onChange={handleOnChange}>
                <StyledInput name="title" type="text" placeholder="Title" />
                <StyledInput name="price" type="number" placeholder="Price" />
                <StyledInput
                    name="description"
                    type="text"
                    placeholder="Description"
                />
                <StyledInput
                    name="category"
                    type="text"
                    placeholder="category"
                />
                <StyledInput name="manufacturer" type="text" placeholder="Manufacturer" />
                <StyledInput name="thumbnail" type="text" placeholder="thumbnail" />
                <StyledInput name="image1" type="text" placeholder="image1" />
                <StyledInput name="image2" type="text" placeholder="image2" />
                <StyledInput name="image3" type="text" placeholder="image3" />
                <button type="submit">Save Information</button>
            </StyledForm>
        </StyledDiv>
    );
};
