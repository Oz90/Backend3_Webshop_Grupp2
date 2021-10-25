import React, { useState, useEffect } from "react";
import { getUserOrders } from '../fetches/fetches';
import { useHistory } from 'react-router-dom';
import { ButtonStyled, MiddleColumnStyled } from '../components/Details/DetailsStyled'
import OrderCard from "../components/UserOrders/OrderCard";

export const UserPageOrders = () => {
    const [orderData, setOrderData] = useState(undefined);

    let history = useHistory()

    async function getUserData() {
        const fetchedOrderData = await getUserOrders()
        console.log(fetchedOrderData)
        setOrderData(fetchedOrderData.data);
    }

    useEffect(() => {
        getUserData()

    }, []);

    const handleOnEditClick = (e) => {
        history.push("/user/edit")
    }
    const handleOnOrderClick = (e) => {
        history.push("/user/order")
    }

    return (
        <>
            <MiddleColumnStyled>

        {orderData?.map(item => {
            return <OrderCard key={item._id} order={item}/>
        })}
            </MiddleColumnStyled>

        </>
    );
};
