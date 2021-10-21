import React, { useEffect , useState} from 'react'
import { useParams } from "react-router-dom"
import { CarouselComp } from '../components/Carousel/CarouselComp'
import { getSingleProduct } from '../fetches/fetches'

export const DetailPage = () => {
    

    let { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        getSingleProduct(id).then(res => setProduct(res.data))
    }, []);
  
    console.log(product)
    return (
        <div>
            <h1>Detail Page</h1>
            <CarouselComp/>
        </div>
    )
}
