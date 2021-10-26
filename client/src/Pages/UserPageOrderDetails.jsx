import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { getSingleOrder, getSingleProduct } from '../fetches/fetches';
import Moment from 'react-moment'
import {
    ListContainerStyled,
    TextStyled,
    ListStyled,
    CardStyled,
    TitleStyled
} from '../components/Details/DetailsStyled'

import {
    CartCardContainerBorder,
    CartCardImage,
    CartCardInfo,
} from '../components/Cart/CartCardStyled';



export default function UserPageOrderDetails() {

    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const [products, setProducts] = useState([]);

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


    return (
        <>
        <ListContainerStyled>
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

                                    <p>Title: {product.title}</p>
                                    <p>Amount: {product.amount} </p>
                                    <p>price: {product.price} SEK</p>
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
        </ListContainerStyled>
        </>
    )
}
