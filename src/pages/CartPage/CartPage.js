import React from "react";
import Layout from "../../Layout/Layout";
import { useCart, useCartActions } from "../../Providers/CartProvider";
import "./cartPage.css";
import { Link } from "react-router-dom";

const Carts = () => {
  const { cart, total } = useCart();

  const dispatch = useCartActions();
  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const decHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  return (
    <Layout>
      {cart.length ? (
        <main className="container">
          <section className="cartCenter">
            <section className="cartItemList">
              {cart.map((item) => {
                return (
                  <div className="cartItem">
                    <div className="itemImg">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.offPrice * item.quantity}</div>
                    <div className="btnGroup">
                      <button
                        onClick={() => {
                          decHandler(item);
                        }}
                      >
                        -
                      </button>
                      <button>{item.quantity}</button>
                      <button
                        onClick={() => {
                          incHandler(item);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </section>
            <CartSummery />
          </section>
        </main>
      ) : (
        <p>Cart Item is Empty !!</p>
      )}
    </Layout>
  );
};

export default Carts;

const CartSummery = () => {
  const { cart, total } = useCart();

  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;
  return (
    <section className="cartSummery">
      <h2>Cart Summery</h2>
      <div className="summeryItems">
        <div className="summeryItem">
          <p>Total :</p>
          <p>{originalTotalPrice} $</p>
        </div>
        <div className="summeryItem">
          <p>Discount :</p>
          <p>{originalTotalPrice - total} $</p>
        </div>
      </div>
      <div className="summeryItem">
        <p>Net Price :</p>
        <p>{total} $</p>
      </div>
      <Link to={"/checkout"}>
        <button className="btn" style={{ width: "100%" }}>
          Check Out
        </button>
      </Link>
    </section>
  );
};
