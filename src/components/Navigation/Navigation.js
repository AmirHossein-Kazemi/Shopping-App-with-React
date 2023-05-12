import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import { useCart } from "../../Providers/CartProvider";

const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={(navData) =>
                navData.isActive ? "activeItemNavigation" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="cartLink">
            <NavLink
              to={"/cart"}
              className={(navData) =>
                navData.isActive ? "activeItemNavigation" : ""
              }
            >
              Cart
            </NavLink>
              <span>{cart.length}</span>
          </li>
        </ul>
        <div className="shopLabel">Amir Shopping</div>
  
   
     
      </nav>
    </header>
  );
};

export default Navigation;
