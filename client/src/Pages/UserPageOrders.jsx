import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { getUserOrders } from '../fetches/fetches';
import { MiddleColumnStyled, ListContainerStyledWide } from '../components/Details/DetailsStyled'
import OrderCard from "../components/UserOrders/OrderCard";
import { ButtonPrimary } from '../components/Buttons/ButtonsStyled'
import { ButtonContainer } from '../components/Buttons/ButtonContainer'
import { HeaderOne } from '../components/Texts/TextsStyled'

export const UserPageOrders = () => {

    const [orderData, setOrderData] = useState(undefined);

    let history = useHistory()

    useEffect(() => {
        getUserData()

    }, []);

    async function getUserData() {
        const fetchedOrderData = await getUserOrders()
        setOrderData(fetchedOrderData.data);
    }

    const handleOnBack = (e) => {
        history.push("/user")
    }


    return (
        <>
            <MiddleColumnStyled>
                <ListContainerStyledWide>
                    <HeaderOne>Your Orders</HeaderOne>
                    <ButtonContainer>
                        <ButtonPrimary onClick={handleOnBack} type="button">Back</ButtonPrimary>
                    </ButtonContainer>

        {orderData?.map(item => {
            return <OrderCard key={item._id} order={item}/>
        })}
                </ListContainerStyledWide>
            </MiddleColumnStyled>

        </>
    );
};
