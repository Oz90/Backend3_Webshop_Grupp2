import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getAllProducts } from "../fetches/fetches"
import {
  StyledCard,
  StyledImgDiv,
  StyledThumbnail,
  StyledProductTitle,
  StyledTitleAndPrice,
} from "../components/StylingProductCategoryPage/StyledProductCategoryPage"

export const ProductCategoryPage = () => {
  let { id } = useParams()
  console.log(id)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.data))
  }, [])

  useEffect(() => {
    filterProducts(id)
    console.log(products)
  }, [products, id])

  const filterProducts = (id) => {
    const filteredArray = products.filter((product) => product.category === id)
    setFilteredProducts(filteredArray)
  }

  return (
    <>
      {filteredProducts.map((product, index) => {
        return (
          <>
            <Link to={`/detailpage/${product._id}`}>
              <StyledCard>
                <StyledImgDiv>
                  <StyledThumbnail  src={product.thumbnail} alt="" />
                </StyledImgDiv>
                <StyledTitleAndPrice>
                  <StyledProductTitle >{product.title}</StyledProductTitle>
                  <p>Price {product.price} Kr</p>
                </StyledTitleAndPrice>
              </StyledCard>
            </Link>
          </>
        )
      })}
    </>
  )
}
