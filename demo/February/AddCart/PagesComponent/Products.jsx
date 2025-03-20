import React, { useState } from "react";
import Data from "../data.json";
import Product from "../Components/Product";

const Products = () => {
  const [products, setProducts] = useState(Data);
  console.log(products);
  return (
    <div className="container">
      <div className="products-all">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default Products;
