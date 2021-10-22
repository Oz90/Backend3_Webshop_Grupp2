import React, { useState, useEffect } from "react";
import { getAllProducts } from '../fetches/fetches';

export const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(res => setProducts(res.data))
    }, []);

    return (
        <>
            <h2>Testing Product page</h2>
            {products.map((product, index) => {
                return (<p>{product.title}</p>)
            })}
        </>
    );
};
