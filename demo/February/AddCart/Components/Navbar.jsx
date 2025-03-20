import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";

export const Navbar = () => {
  const {cart} = useContext(CartContext)
  return (
    <>
      <div className="navbar-title">
        <Link to="/" className="navbar-brand">
          Shop
        </Link>
        <Link to="/cart" className="navbar-link">
          <BsCart className="icon"/><span className="span">{cart.length}</span>
        </Link>
      </div>
    </>
  );
};
