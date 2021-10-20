import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { ProductPage } from './Pages/ProductPage';
import { ProductCategoryPage } from './Pages/ProductCategoryPage';
import { RegisterPage } from './Pages/RegisterPage';
import { AuthContext } from './context/AuthContext';
import { MainContainerStyled } from './components/MainContainer/MainContainerStyled';
import { HeaderStyled } from './components/HeaderContainer/HeaderStyled';
import { SideBar } from './components/SideBar/SideBar';
import { ContentContainerStyled } from './components/ContentContainer/ContentContainerStyled';
import { FooterStyled } from './components/FooterContainer/FooterStyled';

axios.defaults.withCredentials = true;

function App() {
  const [loggedInUser, setLoggedInUser] = useState(undefined);
  const [loggedInAdmin, setLoggedInAdmin] = useState(undefined);

  const url = axios.create({
    baseURL: 'http://localhost:5000/',
  });

  async function getIsUserLoggedIn() {
    const loggedInUserRes = await url.get('/users/loggedinuser');
    setLoggedInUser(loggedInUserRes.data);
    // console.log("User " + loggedInUser);
  }

  async function getIsAdminLoggedIn() {
    const loggedInAdminRes = await url.get('/users/loggedinadmin');
    setLoggedInAdmin(loggedInAdminRes.data);
    setLoggedInUser(loggedInAdminRes.data);
    // console.log("Admin " + loggedInAdmin);
  }

  useEffect(() => {
    getIsUserLoggedIn();
    getIsAdminLoggedIn();
  }, []);


  return (
    <>
      <AuthContext.Provider
        value={{
          loggedInUser,
          loggedInAdmin,
          getIsUserLoggedIn,
          getIsAdminLoggedIn,
        }}
      >
        <MainContainerStyled>
          <HeaderStyled />
          <SideBar />
          <ContentContainerStyled>
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/products/:id" component={ProductCategoryPage} />
              <Route path="/products" component={ProductPage} />
            </Switch>
          </ContentContainerStyled>
          <FooterStyled />
        </MainContainerStyled>
      </AuthContext.Provider>
    </>
  );
}

export default App;
