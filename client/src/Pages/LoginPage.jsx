import React, { useState, useContext } from "react"
import { useHistory, Link } from "react-router-dom"

import { loginUser } from "../fetches/fetches"
import { AuthContext } from "../context/AuthContext"
import Colors from '../styleAssets/Colors'

import { InputPrimary, InputSecondary } from "../components/Buttons/ButtonsStyled"

import {
  FormContainerStyled,
  FormStyled,
  InputStyled,
} from "../components/Form/FormStyled"

import { Message } from '../components/FeedbackMessages/FeedbackMessages'

export const LoginPage = () => {
  const [loginValue, setLoginValue] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)
  const { getIsUserLoggedIn, getIsAdminLoggedIn } = useContext(AuthContext)
  const history = useHistory()

  const handleOnSubmit = (e) => {
    e.preventDefault()

    loginUser(loginValue)
      .then(() => {
        getIsUserLoggedIn()
        getIsAdminLoggedIn()
        history.push("/")
      })
      .catch((error) => {
        setErrorMsg(error.response.data.errorMessage)
      })
  }

  const handleOnChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value })
  }

  return (
    <FormContainerStyled>
      <FormStyled onSubmit={handleOnSubmit} onChange={handleOnChange}>
        <InputStyled name="email" type="email" placeholder="Email" />
        <InputStyled name="password" type="password" placeholder="Password" />
        <InputPrimary type="submit" value="Sign in" />
        <Link to="/register">
          <InputSecondary type="button" value="Register" />
        </Link>
      </FormStyled>
      {errorMsg && <Message type={Colors.danger} >{errorMsg}</Message>}
    </FormContainerStyled>
  )
}
