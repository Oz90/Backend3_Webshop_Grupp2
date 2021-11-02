import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../fetches/fetches';
import { Link, useHistory} from "react-router-dom";
import { HiSearch } from 'react-icons/hi';
import {
  SideBarStyled,
  Input,
  SearchContainer,
  StyledLink,
  StyledUl,
  StyledLi} from './SideBarStyled'


export const SideBar = () => {

  const [searchItem, setSearchItem] = useState()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const history = useHistory()
  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.data))
  }, [])

  const allUniqueCategories = [
    ...new Set(products.map((products) => products.category)),
  ]

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const handleOnChange = (e) => {
    const inputValue = e.target.value

    const capitalInputValue = capitalizeFirstLetter(inputValue)

    if (capitalInputValue == "") {
      setFilteredProducts([])
    } else {
      const result = products.filter((item) =>
        item.title.includes(capitalInputValue)
      )
      setFilteredProducts(result)
    }
  }


    return (
        <SideBarStyled>
            <StyledUl className="sidebarListItems">
                {allUniqueCategories.map((category, index) => {
                    return (
                        <StyledLink key={index} className="reactLink" to={`/products/${category}`} >
                          <StyledLi key={index}>{category}</StyledLi>
                        </StyledLink>);
                      })
                    }
                <SearchContainer>
                  <HiSearch /> 
                  <Input 
                      placeholder="Search products"
                      onChange={handleOnChange}/>
                </SearchContainer>
                {filteredProducts.map((product) => {
                  return (
                    <StyledLink key={product._id} href={`/detailpage/${product._id}`}>
                      <StyledLi key={product._id}>{product.title}</StyledLi>
                    </StyledLink>
                  )
                })}
            </StyledUl>
        </SideBarStyled >
    )
}
