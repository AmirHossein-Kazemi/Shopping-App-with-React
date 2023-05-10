import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <header className="mainNavigation">
      <nav>
      <div className="shopLabel">Amir Shopping</div>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
