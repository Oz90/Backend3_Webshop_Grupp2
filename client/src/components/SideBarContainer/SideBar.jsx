import React, { useState, useEffect } from 'react'
import { SideBarStyled } from './SideBarStyled';
import { getAllProducts } from '../../fetches/fetches';
import { Link } from "react-router-dom";
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
        letter-spacing: 1.4px;
        
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
    margin:5rem 1rem 0 1rem;
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
        weight: 100%
    }
`
export const SideBar = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(res => setProducts(res.data))
    }, []);

    const allUniqueCategories = [...new Set(products.map(products => products.category))]
    // console.log(allUniqueCategories);

    return (
        <SideBarStyled>
            <StyledUl className="sidebarListItems">
            <SearchContainer>
                <HiSearch /> <Input />
            </SearchContainer>
                {allUniqueCategories.map((category, index) => {
                    return (
                    <StyledLink>
                            <Link className="reactLink" to={`/products/${category}`} >
                                <StyledLi key={index}>{category}</StyledLi>
                            </Link>
                    </StyledLink> );
                })}
            </StyledUl>
        </SideBarStyled >
    )
}
