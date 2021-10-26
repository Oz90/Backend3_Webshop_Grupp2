import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { SideBarStyled } from "./SideBarStyled"
import { getAllProducts } from "../../fetches/fetches"
import { Link } from "react-router-dom"
import { InputStyled } from "../Form/FormStyled"

export const SideBar = () => {
  const [searchItem, setSearchItem] = useState()
  const [products, setProducts] = useState([])

  const history = useHistory()
  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.data))
  }, [])

  const allUniqueCategories = [
    ...new Set(products.map((products) => products.category)),
  ]
  // console.log(allUniqueCategories);

  const handleOnChange = (e) => {
    for (let i = 0; i < products.length; i++) {
      if (e.target.value == products[i].title) {
        setSearchItem(e.target.value)
        history.push(`/detailpage/${products[i]._id}`)
      } else {
        //setSearchItem("test")
      }
    }
    //console.log(e.target.value)
  }

  useEffect(() => {
    console.log(searchItem)
  }, [searchItem])

  return (
    <SideBarStyled>
      <ul className="sidebarListItems">
        <InputStyled onChange={handleOnChange}></InputStyled>
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
    </SideBarStyled>
  )
}
