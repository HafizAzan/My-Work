/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FrontendLayout from "./pages/Layout/FrontendLayout";
import Home from "./pages/Home";
import { URL_Path } from "./utils/constant";
import PostDetails from "./pages/PostDetails";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<FrontendLayout />}>
            <Route path={URL_Path.Home} element={<Home />} />
            <Route path={URL_Path.post_details} element={<PostDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
