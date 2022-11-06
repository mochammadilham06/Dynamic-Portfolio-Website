import React from "react";
import { Login } from "../../components";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Login />
    </>
  );
};

export default LoginPage;
