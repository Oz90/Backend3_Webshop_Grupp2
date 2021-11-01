import React, { useState, useEffect } from "react";
import { getAllProducts } from '../fetches/fetches';
import { Link } from "react-router-dom"
import { ButtonPrimary, ButtonSuccess } from '../components/Buttons/ButtonsStyled'
import { ButtonContainer } from '../components/Buttons/ButtonContainer'
import { HeaderOne } from '../components/Texts/TextsStyled'
import { TextStyledNoBorder } from "../components/Details/DetailsStyled";

export const AdminProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(res => setProducts(res.data));
    }, [])


    return (
        <div>
            <HeaderOne>All Products</HeaderOne>
            <ButtonContainer>
                <Link to="/admin">
                    <ButtonPrimary>Back</ButtonPrimary>
                </Link>
            <ButtonSuccess>Add Product</ButtonSuccess>
            </ButtonContainer>
                {products.map((product, index) => {
                    return (
                        <TextStyledNoBorder key={index}>
                            <Link to={`/admin/products/${product._id}`}>{product.title}</Link>
                        </TextStyledNoBorder>
                    )
                })}
            <Link to={`/admin/products/add`}>
               
            </Link>
        </div>
    );
};
