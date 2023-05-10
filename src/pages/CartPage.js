import React from "react";
import Layout from "../Layout/Layout";
import *as data from "../../data"

const Carts = () => {
  return (
    <Layout>
      <main>{data.products.map((p)=>{
        
      })}</main>
    </Layout>
  );
};

export default Carts;
