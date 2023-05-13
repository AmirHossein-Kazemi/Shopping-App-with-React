import React from "react";
import Layout from "../../Layout/Layout";
import Login from "../../components/Login/Login";

const LoginPage = () => {
  return (
    <Layout>
      <div className="formContainer">
        <h1>Login</h1>
        <Login />
      </div>
    </Layout>
  );
};

export default LoginPage;
