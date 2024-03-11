/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FrontendLayout from "./pages/FrontendLayout";
import Home from "./pages/Home";
import { URL_Path } from "./utils/constant";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrontendLayout />}>
          <Route path={URL_Path.Home} element={<Home />} />
          <Route path={URL_Path.post_details} element={<PostDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
