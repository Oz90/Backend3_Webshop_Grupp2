import React, { useEffect , useState} from 'react'
import { Link, useParams } from "react-router-dom"
import { CarouselComp } from '../components/Carousel/CarouselComp'
import { getSingleProduct } from '../fetches/fetches'
import { DetailPageStyled, DetailsDiv } from '../components/DetailPage/DetailPageStyled'

export const DetailPage = () => {
    

    let { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getSingleProduct(id).then(res => setProduct(res.data))
    }, []);
  
    console.log(product)
    
    return (
        <>         
        <DetailPageStyled>
            <CarouselComp/>
            <DetailsDiv>
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.price} SEK</p>
                <Link to={`/cart/add/`}><button>Add to cart</button></Link>
            </div>
            </DetailsDiv>
        </DetailPageStyled>
        </>
        
    )
}
