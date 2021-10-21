import React, { useState, useEffect } from "react";
import { getSingleProduct, editSingleProduct } from '../fetches/fetches';
import { useParams } from "react-router-dom"
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
        <StyledDiv>
            <StyledForm onSubmit={handleOnSubmit}>
                <StyledInput name="title" type="text" value={productValue ?.title} onChange={handleOnChange} />
                <StyledInput name="price" type="number" value={productValue ?.price} onChange={handleOnChange} />
                <StyledInput
                    name="description"
                    type="text"
                    value={productValue ?.description}
                    onChange={handleOnChange}
                />
                <StyledInput
                    name="category"
                    type="text"
                    value={productValue ?.category}
                    onChange={handleOnChange}
                />
                <StyledInput name="manufacturer" type="text" value={productValue ?.manufacturer} onChange={handleOnChange} />
                <StyledInput name="thumbnail" type="text" value={productValue ?.thumbnail} onChange={handleOnChange} />
                <StyledInput name="image1" type="text" value={productValue.images ?.[0]} onChange={handleOnChange} />
                <StyledInput name="image2" type="text" value={productValue.images ?.[1]} onChange={handleOnChange} />
                <StyledInput name="image3" type="text" value={productValue.images ?.[2]} onChange={handleOnChange} />
                <button type="submit">Save Information</button>
            </StyledForm>
        </StyledDiv>
    );
};
