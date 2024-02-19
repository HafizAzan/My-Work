/** @format */

import React from "react";
import { Link, Outlet } from "react-router-dom";

function CustomLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="/about">About </a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* <a href="/contact">Contact</a> */}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
}

export default CustomLayout;
