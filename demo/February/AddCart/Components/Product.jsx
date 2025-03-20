import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const Product = ({ product }) => {
  // console.log(product)
  const { dispatch } = useContext(CartContext);
  return (
    <div className="productList">
      <img src={product.image} className="image" />
      <div className="">
        <h4 className="">{product.title}</h4>
        <h5 className="">${product.price}</h5>
        <button
          className=""
          onClick={() => dispatch({
             type: "Add", 
             product: product })}
        >
          AddCart
        </button>
      </div>
    </div>
  );
};
export default Product;
