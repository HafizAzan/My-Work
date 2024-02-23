/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products Listings</h1>
      <Link to="/products/1">Product One</Link>
      <br />
      <br />
      <Link to="/products/2">Product Two</Link>
      <br />
      <br />
      <Link to="/products/3">Product Three</Link> <br />
    </div>
  );
}

export default Products;
