import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { SideBarStyled } from "./SideBarStyled"
import { getAllProducts } from "../../fetches/fetches"
import { Link } from "react-router-dom"
import { InputStyled } from "../Form/FormStyled"

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
  )
}
