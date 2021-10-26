import React, { useState, useEffect } from "react";
import { getUserOrders } from '../fetches/fetches';
import { MiddleColumnStyled } from '../components/Details/DetailsStyled'
import OrderCard from "../components/UserOrders/OrderCard";

export const UserPageOrders = () => {
    const [orderData, setOrderData] = useState(undefined);

    async function getUserData() {
        const fetchedOrderData = await getUserOrders()
        console.log(fetchedOrderData)
        setOrderData(fetchedOrderData.data);
    }

    useEffect(() => {
        getUserData()

    }, []);

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
