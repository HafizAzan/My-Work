/** @format */

import React from "react";
import { Link, Outlet } from "react-router-dom";

function CustomLayout2() {
  return (
    <div>
      <h1>Header 2 </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <h1>Footer 2 </h1>
    </div>
  );
}

export default CustomLayout2;
