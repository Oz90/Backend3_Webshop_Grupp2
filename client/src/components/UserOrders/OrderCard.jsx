import styled from 'styled-components';
import React from 'react'
import {Link} from 'react-router-dom'
import Moment from 'react-moment';


const OrderCardStyled = styled.div`
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid black;
`;



export default function OrderCard({order}) {
    return (
        <Link to={`/user/order/${order._id}`}>
        <OrderCardStyled>
            <p><Moment format="YYYY-MM-DD">{order.createdAt}</Moment></p>
            <p>{order.totalSum} kr</p>
        </OrderCardStyled>
        
        </Link>
    )
}
