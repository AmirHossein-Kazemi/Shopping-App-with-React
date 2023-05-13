import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import { useCart } from "../../Providers/CartProvider";
import { useAuth } from "../../Providers/AuthProvider";

const Navigation = () => {
  const { cart } = useCart();

  const userData = useAuth();

  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <div className="shopLabel">Amir Shopping</div>
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
        </ul>
        <ul>
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
          <li>
            <NavLink
              to={userData ? "/profile" : "/login"}
              className={(navData) =>
                navData.isActive ? "activeItemNavigation" : ""
              }
            >
              {userData ? "Profile" : " Login / Signup"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
