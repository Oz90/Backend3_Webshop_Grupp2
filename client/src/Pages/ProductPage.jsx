import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import { getAllProducts } from '../fetches/fetches';

export const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [shuffledProducts, setShuffledProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(res => setProducts(res.data))
    }, []);

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        const shuffledArray = shuffle(products);
        setShuffledProducts(shuffledArray);
    }, [products]);

    return (
        <>
            {shuffledProducts.map((product, index) => {
                return <Link to={`/detailpage/${product._id}`}>
                    <div className="card">
                        <div className="imgDiv">
                            <img class="thumbnail" src={product.thumbnail} alt="" />
                        </div>
                        <div className="titleAndPrice">
                            <h2 class="productTitle">{product.title}</h2>
                            <p className="productPrice">Price {product.price} Kr</p>
                        </div>
                    </div>
                </Link>
            })}
        </>
    );
};
