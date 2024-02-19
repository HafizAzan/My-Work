/** @format */

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomLayout from "./components/CustomLayout";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {
  const isUserIsLogin = true;
  return (
    <BrowserRouter>
      <Routes>
        {isUserIsLogin ? (
          <Route element={<CustomLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
