import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getAllProducts } from "../fetches/fetches"
import { StyledProductTitle, PriceP } from "../components/Texts/TextsStyled"
import {
  StyledCard,
  StyledImgDiv,
  StyledThumbnail,
  StyledTitleAndPrice,
} from "../components/StylingProductCategoryPage/StyledProductCategoryPage"

export const ProductCategoryPage = () => {
  let { id } = useParams()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.data))
  }, [])

  useEffect(() => {
    filterProducts(id)
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
            <Link key={product._id} to={`/detailpage/${product._id}`}>
              <StyledCard>
                <StyledImgDiv>
                  <StyledThumbnail  src={product.thumbnail} alt="product" />
                </StyledImgDiv>
                <StyledTitleAndPrice>
                  <StyledProductTitle >{product.title}</StyledProductTitle>
                  <PriceP>{product.price} SEK</PriceP>
                </StyledTitleAndPrice>
              </StyledCard>
            </Link>
          </>
        )
      })}
    </>
  )
}
