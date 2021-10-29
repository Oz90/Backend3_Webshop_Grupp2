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
import Colors from '../styleAssets/Colors'
import { Message } from '../components/FeedbackMessages/FeedbackMessages';

import { ButtonPrimary } from '../components/Buttons/ButtonsStyled';
import { ButtonContainerBottom } from '../components/Buttons/ButtonContainer';
import { HeaderThree, P, PriceP } from '../components/Texts/TextsStyled';



export const DetailPage = () => {
    

    let { id } = useParams();

    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState(null);

    const { cartItemAmount, setCartItemAmount } = useContext(AuthContext);

    useEffect(() => {
        getSingleProduct(id).then(res => setProduct(res.data))
    }, []);

        const handleOnClick = (e) => {
        e.preventDefault();
        setCartItemAmount(0);
        const payload = { amount: 1 };
        updateCart(product._id, payload).then(res => setCart(res.data))

      };
    
    return (
        <>         
        <DetailPageStyled>
            <CarouselComp/>
            <DetailsDiv>
            <div>
                <HeaderThree>{product.title}</HeaderThree>
                <P>{product.description}</P>
                <PriceP>{product.price} SEK</PriceP>
                    <ButtonContainerBottom>
                        <ButtonPrimary onClick={handleOnClick}>Add to cart</ButtonPrimary>
                    </ButtonContainerBottom>
            </div>
                    {cart && <Message type={Colors.success} >This item was added to your cart successfully.</Message>}
            </DetailsDiv>
        </DetailPageStyled>
        </>
        
    )
}
