import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getAllProducts } from '../fetches/fetches';

export const ProductCategoryPage = () => {
    let { id } = useParams();
    console.log(id);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        getAllProducts().then(res => setProducts(res.data))
    }, []);

    useEffect(() => {
        filterProducts(id);
        console.log(products);
    }, [products, id])

    const filterProducts = id => {
        const filteredArray = products.filter((product) => product.category === id);
        setFilteredProducts(filteredArray);

    }



    return (
        <>
            <h2>Testing Product Category Page</h2>

            {filteredProducts.map((product, index) => {
                return (
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                )

            })}
        </>
    );
};
