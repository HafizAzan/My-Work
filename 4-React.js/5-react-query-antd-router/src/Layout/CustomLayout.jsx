/** @format */

import React from "react";
import { Link, Outlet } from "react-router-dom";

function CustomLayout() {
  return (
    <div>
      <nav id="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default CustomLayout;
