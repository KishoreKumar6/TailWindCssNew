import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

export const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);
  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };
  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };
  return (
    <div className="products-all cart-container">
      <img className="image" src={product.image} alt="image" />
      <div className="detail">
        <h4>{product.title}</h4>
        <h5>${product.price}</h5>
        <div>
          <button className="add" onClick={() => Decrease(product.id)}>
            <b>-</b>
          </button>
          <button className="btn-quantity">{product.quantity}</button>
          <button className="add" onClick={() => Increase(product.id)}>
            <b>+</b>
          </button>
        </div>
        <button
          className="remove"
          onClick={() => dispatch({ type: "Remove", id: product.id })}
        >
          Remove
        </button>
        <div className="description">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};
