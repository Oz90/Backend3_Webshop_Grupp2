import React, { useState, useEffect } from "react";
import { getAllProducts } from '../fetches/fetches';
import { Link } from "react-router-dom"
import styled from "styled-components";

const StyledListItem = styled.li`
border: 3px black solid;
`

export const AdminProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(res => setProducts(res.data));
    }, [])


    return (
        <div>
            <h2>Admin Product Page</h2>
            <ul>
                {products.map((product, index) => {
                    return (
                        <StyledListItem key={index}>
                            <Link to={`/admin/products/${product._id}`}>{product.title}</Link>
                        </StyledListItem>
                    )
                })}
            </ul>
            <Link to={`/admin/products/add`}>Add new Product</Link>
        </div>
    );
};
