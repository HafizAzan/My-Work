/** @format */

import React from "react";
import { useParams } from "react-router-dom";

function ProductsDetail() {
  const { productId } = useParams();
  return (
    <div>
      <h1>Product Detail</h1>
      <p>This is Product {productId}</p>
    </div>
  );
}

export default ProductsDetail;
