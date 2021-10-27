import React, { useState, useEffect } from 'react'
import { SideBarStyled } from './SideBarStyled';
import { getAllProducts } from '../../fetches/fetches';
import { Link, useHistory} from "react-router-dom";
import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

const StyledLink = styled.a`
        background-color: inherit;
        text-decoration: none;
        border: none;
        cursor: pointer;
        color: black;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1.2px;
        
        `
const StyledUl = styled.ul`
    display: flex;
    align-items:center;
    flex-flow: column;

    `

const StyledLi = styled.li`
    margin-top: 2rem;
    list-style: none;
    transition: all .2s ease-in-out;
    color: black;
        &:hover {
            transform: scale(1.1);
            font-weight: 500;
        }
    `

const SearchContainer = styled.div`
    border: 1px solid black;
    border-radius: 50px;
    height: 2rem;
    display: flex;
    align-items: center;
    margin: 2rem 1rem 0 1rem;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    background: none;
    :active {
        background-color:red;
    }
    :focus {
        outline: none;
        background: none;
        height: 100%;
        weight: 100%;
    }
`
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
                        <StyledLink>
                            <Link className="reactLink" to={`/products/${category}`} >
                                <StyledLi key={index}>{category}</StyledLi>
                            </Link>
                        </StyledLink>);
                })}
                <SearchContainer>
                    <HiSearch /> 
                    <Input 
                        placeholder="Search products"
                        onChange={handleOnChange}/>
                </SearchContainer>
                {filteredProducts.map((product) => {
                    return (
                        <StyledLink>
                        <a href={`/detailpage/${product._id}`}>
                            <StyledLi>{product.title}</StyledLi>
                        </a>
                        </StyledLink>
                    )
                })}
            </StyledUl>
        </SideBarStyled >
    )

  /* return (
    <SideBarStyled>
      <ul className="sidebarListItems">
        {allUniqueCategories.map((category, index) => {
          return (
            <Link className="reactLink" to={`/products/${category}`}>
              <li key={index}>
                <p className="sidebarLinks">{category}</p>
              </li>
            </Link>
          )
        })}
      </ul>
      <div>
        <InputStyled
          placeholder="Search products"
          onChange={handleOnChange}
        ></InputStyled>
        {filteredProducts.map((product) => {
          return (
            <a href={`/detailpage/${product._id}`}>
              <p>{product.title}</p>
            </a>
          )
        })}
      </div>
    </SideBarStyled>
  ) */
}
