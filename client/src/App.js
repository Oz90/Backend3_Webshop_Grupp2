import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';
import { AuthContext } from './context/AuthContext';
import { MainContainerStyled } from './components/MainContainer/MainContainerStyled';
import { HeaderStyled } from './components/HeaderContainer/HeaderStyled';
import { SideBarStyled } from './components/SideBar/SideBarStyled';
import { ContentContainerStyled } from './components/ContentContainer/ContentContainerStyled';
import { FooterStyled } from './components/FooterContainer/FooterStyled';

axios.defaults.withCredentials = true;
axios.default.interceptors.response.use((x) => {
  console.log(JSON.stringify(x.data))
  return x;
});

function App() {
  const [loggedInUser, setLoggedInUser] = useState(undefined);
  const [loggedInAdmin, setLoggedInAdmin] = useState(undefined);

  const url = axios.create({
    baseURL: 'http://localhost:5000/',
  });

  axios.get('http://localhost:5000/')
    .then(res => console.log('refrecheedddd'))



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
          <SideBarStyled />
          <ContentContainerStyled>
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </Switch>
          </ContentContainerStyled>
          <FooterStyled />
        </MainContainerStyled>
      </AuthContext.Provider>
    </>
  );
}

export default App;
