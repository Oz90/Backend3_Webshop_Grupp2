import React from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from '../components/Buttons/ButtonsStyled';
import { ButtonContainer } from '../components/Buttons/ButtonContainer';
import { HeaderOne } from '../components/Texts/TextsStyled'


export const AdminPage = () => {



    return (
        <div>
            <HeaderOne>Admin</HeaderOne>
            <ButtonContainer>
                <ButtonPrimary><Link to="/admin/orders">Orders</Link></ButtonPrimary>
                <ButtonPrimary><Link to="/admin/products">Products</Link></ButtonPrimary>
            </ButtonContainer>
        </div>
    );
};
