import React from "react";
import Layout from "../../Layout/Layout";
import Signup from "../../components/Signup/Signup";
import { Link } from "react-router-dom";
import "./login-sign.css";

const SignupPage = () => {
  return (
    <Layout>
      <div className="formContainer">
        <h1>Signup</h1>
        <Signup />
      </div>
    </Layout>
  );
};

export default SignupPage;
