import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { getUserOrders } from '../fetches/fetches';
import { MiddleColumnStyled } from '../components/Details/DetailsStyled'
import OrderCard from "../components/UserOrders/OrderCard";
import {
    ButtonStyled,
} from '../components/Form/FormStyled'

export const UserPageOrders = () => {

    const [orderData, setOrderData] = useState(undefined);

    let history = useHistory()

    useEffect(() => {
        getUserData()

    }, []);

    async function getUserData() {
        const fetchedOrderData = await getUserOrders()
        console.log(fetchedOrderData)
        setOrderData(fetchedOrderData.data);
    }

    const handleOnBack = (e) => {
        history.push("/user")
    }


    return (
        <>
            <MiddleColumnStyled>
            <ButtonStyled onClick={handleOnBack} type="button">Back</ButtonStyled>

        {orderData?.map(item => {
            return <OrderCard key={item._id} order={item}/>
        })}
            </MiddleColumnStyled>

        </>
    );
};
