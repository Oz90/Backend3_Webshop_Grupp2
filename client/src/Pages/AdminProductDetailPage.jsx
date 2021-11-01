import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { getSingleProduct, editSingleProduct, deleteSingleProduct } from '../fetches/fetches';
import { useParams, useHistory } from "react-router-dom"
import { ButtonPrimary, InputSuccess, InputDanger } from '../components/Buttons/ButtonsStyled'
import { ButtonContainerBottom, ButtonContainer } from '../components/Buttons/ButtonContainer'
import { HeaderOne } from '../components/Texts/TextsStyled'

import {
    FormContainerStyled,
    FormStyled,
    InputStyled,
    LabelStyled,
} from '../components/Form/FormStyled';


export const AdminProductDetailPage = () => {
    const history = useHistory()
    const { id } = useParams();
    const [productValue, setProductValue] = useState([]);
   

    useEffect(() => {
        getSingleProduct(id).then(res => setProductValue(res.data));
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const { title, price, description, category, manufacturer, thumbnail, image1, image2, image3 } = productValue
        const payload = { title, price, description, category, manufacturer, thumbnail, image1, image2, image3 }
        console.log(payload)
        editSingleProduct(id, payload);
        history.push("/admin/products")
    };

    const handleOnChange = (e) => {
        setProductValue({ ...productValue, [e.target.name]: e.target.value });
    };

    const handleDelete = () =>{
        deleteSingleProduct(id)
        history.push("/admin/products")

    }

    return (
        <FormContainerStyled>
            <HeaderOne>{productValue?.title}</HeaderOne>
            <ButtonContainer>
                <Link to="/admin">
                    <ButtonPrimary>Back</ButtonPrimary>
                </Link>
           </ButtonContainer>
            <FormStyled onSubmit={handleOnSubmit}>
                <LabelStyled for="title">Title</LabelStyled>
                <InputStyled name="title" type="text" value={productValue?.title} onChange={handleOnChange} />
                <LabelStyled for="price">Price</LabelStyled>
                <InputStyled name="price" type="number" value={productValue?.price} onChange={handleOnChange} />
                <LabelStyled for="description">Description</LabelStyled>
                <InputStyled
                    name="description"
                    type="text"
                    value={productValue?.description}
                    onChange={handleOnChange}
                />
                <LabelStyled for="category">Category</LabelStyled>
                <InputStyled
                    name="category"
                    type="text"
                    value={productValue?.category}
                    onChange={handleOnChange}
                />
                <LabelStyled for="manufacturer">Manufacturer</LabelStyled>
                <InputStyled name="manufacturer" type="text" value={productValue?.manufacturer} onChange={handleOnChange} />
                <LabelStyled for="thumbnail">Thumbnail</LabelStyled>
                <InputStyled name="thumbnail" type="text" value={productValue?.thumbnail} onChange={handleOnChange} />
                <LabelStyled for="image1">Image 1</LabelStyled>
                <InputStyled name="image1" type="text" value={productValue.images?.[0]} onChange={handleOnChange} />
                <LabelStyled for="image2">Image 2</LabelStyled>
                <InputStyled name="image2" type="text" value={productValue.images?.[1]} onChange={handleOnChange} />
                <LabelStyled for="image3">Image 3</LabelStyled>
                <InputStyled name="image3" type="text" value={productValue.images?.[2]} onChange={handleOnChange} />
                <ButtonContainerBottom>
                <InputSuccess type="submit" value="Update product" />
                <InputDanger onClick={handleDelete} type="button" value="Delete product" />
                </ButtonContainerBottom>


            </FormStyled>
        </FormContainerStyled>
    );
};
