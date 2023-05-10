import React from "react";
import Layout from "../Layout/Layout";
import * as data from "../data";

const HomePage = () => {
  const addProductHandler = (product)=>{
    
  }
  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product">
                <div className="productImage">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="productDesc">
                  <p>{product.name}</p>
                  <p>$ {product.price}</p>
                </div>
                <button
                  className="btn"
                  onClick={() => addProductHandler(product)}
                >
                  Add to Cart
                </button>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
