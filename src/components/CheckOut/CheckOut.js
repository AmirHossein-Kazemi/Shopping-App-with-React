import React from "react";
import { useAuth } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";

const CheckOut = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  if (!cart.length)
    return (
      <main className="conatiner">
        <Link to={"/"}>go to shopping ?</Link>
      </main>
    );
  return (
    <main className="container">
      <section className="cartCenter">
        {auth ? (
          <>
            <section className="cartItemList">
              <h3>Checkout Detail</h3>
              <div>
                <p>name : {auth.name}</p>
                <p>email : {auth.email}</p>
                <p>number : {auth.number}</p>
              </div>
            </section>
            <section className="cartSummery">
              {cart &&
                cart.map((item) => {
                  return (
                    <div>
                      {item.name} * {item.quantity} :{" "}
                      {item.quantity * item.offPrice} $
                    </div>
                  );
                })}
              <hr />
              <div>total price : {total}</div>
            </section>
          </>
        ) : (
          <Link to={"/login"}>Please Login</Link>
        )}
      </section>
    </main>
  );
};

export default CheckOut;
