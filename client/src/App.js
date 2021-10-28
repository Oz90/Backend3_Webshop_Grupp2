import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { AdminPage } from './Pages/AdminPage';
import { AdminOrderPage } from './Pages/AdminOrderPage';
import { AdminProductPage } from './Pages/AdminProductPage';
import { AdminProductDetailPage } from './Pages/AdminProductDetailPage';
import { AdminAddProductPage } from './Pages/AdminAddProductPage';
import { ProductPage } from './Pages/ProductPage';
import { ProductCategoryPage } from './Pages/ProductCategoryPage';
import { UserPage } from './Pages/UserPage';
import { UserPageEdit } from './Pages/UserPageEdit';
import { UserPageOrders } from './Pages/UserPageOrders';
import UserPageOrderDetails from './Pages/UserPageOrderDetails';
import { RegisterPage } from './Pages/RegisterPage';
import { CartPage } from './Pages/CartPage';
import { AuthContext } from './context/AuthContext';
import { MainContainerStyled } from './components/MainContainer/MainContainerStyled';
import { HeaderStyled } from './components/HeaderContainer/HeaderStyled';
//import { SideBar } from './components/SideBar/SideBar';
import { SideBar } from "./components/SideBarContainer/SideBar"
import { ContentContainerStyled } from './components/ContentContainer/ContentContainerStyled';
import { FooterStyled } from './components/FooterContainer/FooterStyled';
import { NavBar } from './components/HeaderContainer/NavBar';
import { DetailPage } from './Pages/DetailPage';

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'https://stark-headland-25678.herokuapp.com/' || 'http://localhost:5000/';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(undefined);
  const [loggedInAdmin, setLoggedInAdmin] = useState(undefined);
  const [cartItemAmount, setCartItemAmount] = useState();

  console.log(process.env.API_KEY);

  // const ourURLs = process.env.API_KEY || 'http://localhost:5000/'

  const url = axios.create({
    baseURL: 'https://stark-headland-25678.herokuapp.com' || 'http://localhost:5000/',
  });

  async function getIsUserLoggedIn() {
    const loggedInUserRes = await url.get('/users/loggedinuser');
    setLoggedInUser(loggedInUserRes.data);
  }

  async function getIsAdminLoggedIn() {
    const loggedInAdminRes = await url.get('/users/loggedinadmin');
    setLoggedInAdmin(loggedInAdminRes.data);
  }
  useEffect(() => {
    getIsUserLoggedIn();
    getIsAdminLoggedIn();
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          cartItemAmount,
          setCartItemAmount,
          loggedInUser,
          loggedInAdmin,
          getIsUserLoggedIn,
          getIsAdminLoggedIn,
        }}
      >
        <MainContainerStyled>
          <HeaderStyled >
            <NavBar />
          </HeaderStyled>
          <SideBar />
          {/* <SideBar /> */}
          <ContentContainerStyled>
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/products/:id" component={ProductCategoryPage} />
              <Route path="/products" component={ProductPage} />
              <Route path="/user/edit" component={UserPageEdit} />
              <Route path="/user/order/:id" component={UserPageOrderDetails} />
              <Route path="/user/order" component={UserPageOrders} />
              <Route path="/detailpage/:id" component={DetailPage} />
              <Route path="/user" component={UserPage} />
              <Route path="/admin/products/add" component={AdminAddProductPage} />
              <Route path="/admin/products/:id" component={AdminProductDetailPage} />
              <Route path="/admin/products" component={AdminProductPage} />
              <Route path="/admin/orders" component={AdminOrderPage} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/" component={ProductPage} />
            </Switch>
          </ContentContainerStyled>
          {/* <FooterStyled /> */}
        </MainContainerStyled>
      </AuthContext.Provider>
    </>
  );
}

export default App;
