import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { getSingleOrder, getSingleProduct } from '../fetches/fetches';
import Moment from 'react-moment'
import {
    ListContainerStyledWide,
    TextStyled,
    ListStyled,
    TitleStyled,
    MiddleColumnStyled
} from '../components/Details/DetailsStyled'

import {
    CartCardContainerBorder,
    CartCardImage,
    CartCardInfo,
} from '../components/Cart/CartCardStyled';

import { ButtonPrimary } from '../components/Buttons/ButtonsStyled'
import { ButtonContainer } from '../components/Buttons/ButtonContainer'
import { ProductP } from '../components/Texts/TextsStyled'


export default function UserPageOrderDetails() {

    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const [products, setProducts] = useState([]);

    let history = useHistory()

    useEffect(() => {
        setOrder([]);
        getSingleOrder(id)
            .then(res => setOrder(res.data))
                
    }, []);

    useEffect(() => {
        setProducts([]);
        order?.products?.map((item) => {
            getSingleProduct(item._id)
                .then(res => setProducts(products => [...products, { ...res.data, amount: item.amount }]));
        });

    }, [order]); 

    const handleOnBack = (e) => {
        history.push("/user")
    } 
    
    return (
        <>
        <MiddleColumnStyled>
        <ListContainerStyledWide>
            <ButtonContainer>
                <ButtonPrimary onClick={handleOnBack} type="button">Back</ButtonPrimary>
            </ButtonContainer>
            <ListStyled>
                <TitleStyled>Shipped</TitleStyled>
                <TextStyled>{order?.isShipped ? "Yes" : "No"}</TextStyled>
                <TitleStyled>Order Date </TitleStyled>
                    <TextStyled>
                        <Moment format="YYYY-MM-DD">{order.createdAt}</Moment>
                    </TextStyled>
                <TitleStyled>Address</TitleStyled>
                <TextStyled>{order?.shippingAddress?.street}</TextStyled>
                <TitleStyled>Zipcode</TitleStyled>
                <TextStyled>{order?.shippingAddress?.zipcode}</TextStyled>
                <TitleStyled>City</TitleStyled>
                <TextStyled>{order?.shippingAddress?.city}</TextStyled>
                <TitleStyled>Products</TitleStyled>
                {
                    products?.map((product) => {
                            return <>
                                <CartCardContainerBorder>
                                    <CartCardImage src={product.thumbnail} alt={product.title}/>
                                    <CartCardInfo>
                                        <ProductP>Title: {product.title}</ProductP>
                                        <ProductP>Amount: {product.amount} </ProductP>
                                        <ProductP>price: {product.price} SEK</ProductP>
                                    </CartCardInfo>
                                </CartCardContainerBorder>
                            </>       
                    })
                }
                <TitleStyled>Shipping Cost</TitleStyled>
                <TextStyled>{order?.shippingCost} SEK</TextStyled>
                <TitleStyled>Total Cost</TitleStyled>
                    <TextStyled>{order?.totalSum + order?.shippingCost} SEK</TextStyled>
            </ListStyled>
        </ListContainerStyledWide>
        </MiddleColumnStyled>
        </>
    )
}
