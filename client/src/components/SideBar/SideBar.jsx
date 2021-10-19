import React, { useState, useEffect } from 'react'
import { SideBarStyled } from './SideBarStyled';
import { getAllProducts } from '../../fetches/fetches';
import { Link } from "react-router-dom"

export const SideBar = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(res => setProducts(res.data))
    }, []);

    const allUniqueCategories = [...new Set(products.map(products => products.category))]
    // console.log(allUniqueCategories);


    return (
        <SideBarStyled>
            <ul>
                {allUniqueCategories.map((category, index) => {
                    return (<Link to={`/products/${category}`} >
                        <li key={index}>{category}</li>
                    </Link>);
                })}
            </ul>
        </SideBarStyled >
    )
}
