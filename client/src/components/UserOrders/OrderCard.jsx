import styled from 'styled-components';
import React from 'react'
import {Link} from 'react-router-dom'
import Moment from 'react-moment';
import Colors from '../../styleAssets/Colors'


const OrderCardStyled = styled.div`
    font-size: 1rem;
  border: 3px solid ${Colors.primary};
  color: ${Colors.primary};
  background-color: ${Colors.white};
  width: 100%;
  padding: .5rem;
  margin-bottom: 1rem;
  :hover {
      background-color: ${Colors.primary}, 0.7;
  }
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
