import React from "react";
import { LoginForm } from "../components/LoginForm/LoginForm";
import LogoutButton from "../components/LoginForm/LogoutButton";

export const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <LogoutButton />
    </>
  );
};
