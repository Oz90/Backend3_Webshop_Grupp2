import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
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
            {filteredProducts.map((product, index) => {
                return (
                    <>
                        <Link to={`/detailpage/${product._id}`}>
                            <div className="card">
                                <img class="thumbnail" src={product.thumbnail} alt="" />
                                <div className="titleAndPrice">
                                    <h2 class="productTitle">{product.title}</h2>
                                    <p className="productPrice">Price {product.price} Kr</p>
                                </div>
                            </div>
                        </Link>
                    </>
                )
            })}
        </>
    );
};
