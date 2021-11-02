import 'react-responsive-carousel/lib/styles/carousel.min.css'
import React, { useEffect , useState} from 'react'
import { useParams } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';
import { getSingleProduct } from '../../fetches/fetches'

export const CarouselComp = () => {

    let { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getSingleProduct(id).then(res => setProduct(res.data.images))
    }, []);

    return (
        <>
        <Carousel autoPlay axis="horizontal" infiniteLoop interval="5000">
            <div>
                <img alt="product" src={product[0]} />
            </div>
            <div>
                    <img alt="product" src={product[1]} />
            </div>
            <div>
                    <img alt="product" src={product[2]} />
            </div>
        </Carousel> 
        </>
    )
}
