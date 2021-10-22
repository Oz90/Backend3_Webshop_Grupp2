import React, { useState, useEffect } from "react";
import { getSingleProduct, editSingleProduct } from '../fetches/fetches';
import { useParams } from "react-router-dom"
import styled from "styled-components";


import {
    FormContainerStyled,
    FormStyled,
    InputStyled,
    SubmitStyled,
} from '../components/Form/FormStyled';


export const AdminProductDetailPage = () => {
    const { id } = useParams();
    const [productValue, setProductValue] = useState([]);
    // const [updatedProduct, setUpdatedProduct] = useState(product);
    console.log(productValue.images);

    useEffect(() => {
        getSingleProduct(id).then(res => setProductValue(res.data));
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const { title, price, description, category, manufacturer, thumbnail, image1, image2, image3 } = productValue
        const payload = { title, price, description, category, manufacturer, thumbnail, image1, image2, image3 }
        console.log(payload)
        editSingleProduct(id, payload);
    };

    const handleOnChange = (e) => {
        setProductValue({ ...productValue, [e.target.name]: e.target.value });
    };


    return (
        <FormContainerStyled>
            <FormStyled onSubmit={handleOnSubmit}>
                <InputStyled name="title" type="text" value={productValue?.title} onChange={handleOnChange} />
                <InputStyled name="price" type="number" value={productValue?.price} onChange={handleOnChange} />
                <InputStyled
                    name="description"
                    type="text"
                    value={productValue?.description}
                    onChange={handleOnChange}
                />
                <InputStyled
                    name="category"
                    type="text"
                    value={productValue?.category}
                    onChange={handleOnChange}
                />
                <InputStyled name="manufacturer" type="text" value={productValue?.manufacturer} onChange={handleOnChange} />
                <InputStyled name="thumbnail" type="text" value={productValue?.thumbnail} onChange={handleOnChange} />
                <InputStyled name="image1" type="text" value={productValue.images?.[0]} onChange={handleOnChange} />
                <InputStyled name="image2" type="text" value={productValue.images?.[1]} onChange={handleOnChange} />
                <InputStyled name="image3" type="text" value={productValue.images?.[2]} onChange={handleOnChange} />
                <SubmitStyled type="submit" value="Update product info" />
            </FormStyled>
        </FormContainerStyled>
    );
};
