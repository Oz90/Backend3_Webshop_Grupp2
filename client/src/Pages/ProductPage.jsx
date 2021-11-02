import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllProducts } from "../fetches/fetches"
import { PriceP, StyledProductTitle } from '../components/Texts/TextsStyled'
import {
  StyledCard,
  StyledImgDiv,
  StyledThumbnail,
  StyledTitleAndPrice,
} from "../components/StylingProductCategoryPage/StyledProductCategoryPage"

export const ProductPage = () => {
  const [products, setProducts] = useState([])
  const [shuffledProducts, setShuffledProducts] = useState([])

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.data))
  }, [])

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    const shuffledArray = shuffle(products)
    setShuffledProducts(shuffledArray)
  }, [products])

  return (
    <>
      {shuffledProducts.map((product, index) => {
        return (
          <Link key={product._id} to={`/detailpage/${product._id}`}>
            <StyledCard>
              <StyledImgDiv>
                <StyledThumbnail src={product.thumbnail} alt="" />
              </StyledImgDiv>
              <StyledTitleAndPrice>
                <StyledProductTitle>{product.title}</StyledProductTitle>
                <PriceP>{product.price} SEK</PriceP>
              </StyledTitleAndPrice>
            </StyledCard>
          </Link>
        )
      })}
    </>
  )
}
