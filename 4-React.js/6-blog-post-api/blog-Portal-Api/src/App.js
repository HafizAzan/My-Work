/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FrontendLayout from "./pages/Layout/FrontendLayout";
import Home from "./pages/Home";
import { URL_Path } from "./utils/constant";
import PostDetails from "./pages/PostDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import CategoryDetails from "./pages/CategoryDetails";
import { ReactQueryDevtools } from "react-query/devtools";
import SearchService from "./pages/SearchDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<FrontendLayout />}>
            <Route path={URL_Path.Home} element={<Home />} />
            <Route path={URL_Path.post_details} element={<PostDetails />} />
            <Route path={URL_Path.Category_details} element={<CategoryDetails />} />
            <Route path={URL_Path.Search_Details} element={<SearchService />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
