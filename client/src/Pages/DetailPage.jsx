import React, { useEffect , useState,useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { Link, useParams } from "react-router-dom"
import { CarouselComp } from '../components/Carousel/CarouselComp'
import { getSingleProduct, updateCart } from '../fetches/fetches'
import { DetailPageStyled, DetailsDiv } from '../components/DetailPage/DetailPageStyled'
import {
    AmountForm,
    AmountInput,
    AmountSubmit,
  } from '../components/Cart/CartCardStyled';

export const DetailPage = () => {
    

    let { id } = useParams();

    const [product, setProduct] = useState([]);

    const { cartItemAmount, setCartItemAmount } = useContext(AuthContext);

    useEffect(() => {
        getSingleProduct(id).then(res => setProduct(res.data))
    }, []);

    const handleOnClick = (e) => {
        e.preventDefault();
        setCartItemAmount(0);
        const payload = { amount: 1 };
        updateCart(product._id, payload);
      };
    
    return (
        <>         
        <DetailPageStyled>
            <CarouselComp/>
            <DetailsDiv>
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.price} SEK</p>
                <button onClick={handleOnClick}>Add to cart</button>
            </div>
            </DetailsDiv>
        </DetailPageStyled>
        </>
        
    )
}
