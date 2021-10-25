import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { getSingleOrder } from '../fetches/fetches';
import Moment from 'react-moment'
import {
    ListContainerStyled,
    TextStyled,
    ListStyled,
    ButtonStyled,
    TitleStyled
} from '../components/Details/DetailsStyled'



export default function UserPageOrderDetails() {

    const { id } = useParams();
    const [order, setOrder] = useState([]);

    useEffect(() => {
        getSingleOrder(id).then(res => setOrder(res.data))
        
        
    }, [])

    order ? console.log(order) : console.log("bajs")

    return (
        <>
        <ListContainerStyled>
            <ListStyled>
                <TitleStyled>Shipped</TitleStyled>
                <TextStyled>{order?.isShipped ? "Yes" : "No"}</TextStyled>
                <TitleStyled>Shipping Cost</TitleStyled>
                <TextStyled>{order?.shippingCost}</TextStyled>
                <TitleStyled>Total Cost (Without shipping)</TitleStyled>
                <TextStyled>{order?.totalSum}</TextStyled>
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
            </ListStyled>
        </ListContainerStyled>
        </>
    )
}
