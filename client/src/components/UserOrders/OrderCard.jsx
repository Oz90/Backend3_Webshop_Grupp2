import React from 'react'
import {Link} from 'react-router-dom'
import Moment from 'react-moment';

import { OrderCardStyled } from './OrderCardStyled'

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
