import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

axios.defaults.withCredentials = true;

function App() {
  const [loggedInUser, setLoggedInUser] = useState(undefined);
  const [loggedInAdmin, setLoggedInAdmin] = useState(undefined);

  const url = axios.create({
    baseURL: "http://localhost:5000/"
  });

  async function getIsUserLoggedIn() {
    const loggedInUserRes = await url.get("/users/loggedinuser");
    setLoggedInUser(loggedInUserRes.data);
    // console.log("User " + loggedInUser);
  }

  async function getIsAdminLoggedIn() {
    const loggedInAdminRes = await url.get("/users/loggedinadmin");
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
          getIsAdminLoggedIn
        }}
      >
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </AuthContext.Provider>
    </>
  );
}

export default App;
