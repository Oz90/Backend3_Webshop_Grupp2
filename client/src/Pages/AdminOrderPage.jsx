import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getAllOrders, toggleOrderIsShipped } from '../fetches/fetches';
import { ButtonPrimary } from '../components/Buttons/ButtonsStyled'
import { ButtonContainer } from '../components/Buttons/ButtonContainer'
import { OrderCardStyled } from '../components/UserOrders/OrderCardStyled'
import { TitleStyled, TextStyledNoBorder } from "../components/Details/DetailsStyled";
import { MiddleColumnStyled } from '../components/Details/DetailsStyled';
import { HeaderOne } from '../components/Texts/TextsStyled'

export const AdminOrderPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllOrders().then(res => setOrders(res.data));
    }, [])

    function shipOrder(id) {
        toggleOrderIsShipped(id);
    }


    return (
        <MiddleColumnStyled>
            <HeaderOne>All Orders</HeaderOne>
            <ButtonContainer>
                <Link to="/admin">
                    <ButtonPrimary>Back</ButtonPrimary>
                </Link>
            </ButtonContainer>
            {orders.map((order, index) => {
                return (
                    <OrderCardStyled key={index}>
                        <TitleStyled>Order number</TitleStyled>
                        <TextStyledNoBorder>{order._id}</TextStyledNoBorder>
                        <TitleStyled>Customer</TitleStyled>
                        <TextStyledNoBorder>{order.user}</TextStyledNoBorder>
                        <TitleStyled>Customer email</TitleStyled>
                        <TextStyledNoBorder>{order.email}</TextStyledNoBorder>
                        <TitleStyled>Is order currently shipped?</TitleStyled>
                        <TextStyledNoBorder>{order.isShipped ? "Is shipped" : "Not shipped"}</TextStyledNoBorder>
                        <ButtonPrimary onClick={() => shipOrder(order._id)}>{order.isShipped ? "Cancel shipping" : "Start shipping"}</ButtonPrimary>
                    </OrderCardStyled>
                )
            })}
        </MiddleColumnStyled>
    );
};
