/** @format */

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomLayout from "./components/CustomLayout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Products from "./pages/ProductsListing";
import ProductsDetail from "./pages/ProductsDetail";
import CustomLayout2 from "./components/CustomLayout2";

function App() {
  const isUserIsLogin = true;
  return (
    <BrowserRouter>
      <Routes>
        {isUserIsLogin ? (
          <React.Fragment>
            <Route element={<CustomLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
            </Route>
            <Route element={<CustomLayout2 />}>
              <Route path="/products/:productId" element={<ProductsDetail />} />
            </Route>
          </React.Fragment>
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
