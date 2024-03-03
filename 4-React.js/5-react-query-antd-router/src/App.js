/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import PostApi from "./pages/PostApi";
import { QueryClient, QueryClientProvider } from "react-query";
import CustomLayout from "./Layout/CustomLayout";
import About from "./pages/About";

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<CustomLayout />}>
              <Route path="/" element={<PostApi />} />
              <Route path="/contact" element={<h1>Contact US</h1>} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
