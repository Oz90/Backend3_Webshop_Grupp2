import React, { useState, useEffect } from "react";
import { getAllOrders, toggleOrderIsShipped } from '../fetches/fetches';
import styled from "styled-components";

const StyledListItem = styled.li`
border: 3px black solid;
`

export const AdminOrderPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllOrders().then(res => setOrders(res.data));
    }, [])

    function shipOrder(id) {
        toggleOrderIsShipped(id);
    }


    return (
        <div>
            <ul>
                {orders.map((order, index) => {
                    return (
                        <StyledListItem key={index}>
                            <p>Order number: {order._id}</p>
                            <p>Customer: {order.user}</p>
                            <p>Customer email: {order.email}</p>
                            <p>Is order currently shipped? {order.isShipped ? "Is shipped" : "Not shipped"}</p>
                            <button onClick={() => shipOrder(order._id)}>{order.isShipped ? "Cancel shipping" : "Start shipping"}</button>
                        </StyledListItem>

                    )

                })}
            </ul>

        </div>
    );
};
