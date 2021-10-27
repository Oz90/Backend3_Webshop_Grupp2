import React, { useState, useEffect } from "react";
import { addProduct } from '../fetches/fetches';
import { useHistory } from "react-router-dom"


import {
    FormContainerStyled,
    FormStyled,
    InputStyled,
    SubmitStyled,
    ErrorMessageStyled,
} from '../components/Form/FormStyled';

export const AdminAddProductPage = () => {
    const history = useHistory()
    const [errorMsg, setErrorMsg] = useState(null);
    const [productValue, setProductValue] = useState({});

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addProduct(productValue).then(() => {history.push("/admin/products");})
        .catch((error) => {
          setErrorMsg(error.response.data.errorMessage);
        });

    };

    const handleOnChange = (e) => {
        setProductValue({ ...productValue, [e.target.name]: e.target.value });
    };

    return (

        <FormContainerStyled>
            <FormStyled onSubmit={handleOnSubmit} onChange={handleOnChange}>
                <InputStyled name="title" type="text" placeholder="Title" />
                <InputStyled name="price" type="number" placeholder="Price" />
                <InputStyled
                    name="description"
                    type="text"
                    placeholder="Description"
                />
                <InputStyled
                    name="category"
                    type="text"
                    placeholder="category"
                />
                <InputStyled name="manufacturer" type="text" placeholder="Manufacturer" />
                <InputStyled name="thumbnail" type="text" placeholder="thumbnail" />
                <InputStyled name="image1" type="text" placeholder="image1" />
                <InputStyled name="image2" type="text" placeholder="image2" />
                <InputStyled name="image3" type="text" placeholder="image3" />
                <SubmitStyled type="submit" value="Add Product" />
            </FormStyled>
            {errorMsg && <ErrorMessageStyled>{errorMsg}</ErrorMessageStyled>}
        </FormContainerStyled>
    );
};
