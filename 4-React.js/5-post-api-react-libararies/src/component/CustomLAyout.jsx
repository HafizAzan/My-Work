/** @format */

import React from "react";
import "../App.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "antd";

function CustomLAyout() {
  const navigate = useNavigate();
  return (
    <>
      <div className="styling">
        <h1>Working On Post listings</h1>

        <div>
          <nav>
            <ul id="style">
              <li>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
                  Contact
                </Link>
              </li>
              <li>
                <Button type="primary" onClick={() => navigate("/post/create-post")}>
                  Create Post
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default CustomLAyout;
