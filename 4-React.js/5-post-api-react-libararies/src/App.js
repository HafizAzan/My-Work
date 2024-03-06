/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PostApi from "./pages/PostApi";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomLAyout from "./component/CustomLAyout";
import { QueryClient, QueryClientProvider } from "react-query";
import CreatePost from "./pages/CreatePost";
import { ReactQueryDevtools } from "react-query/devtools";
import EditPost from "./pages/EditPost";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CustomLAyout />}>
            <Route path="/" element={<PostApi />} />
            <Route path="/post/create-post" element={<CreatePost />} />
            <Route path="/edit-post/:postId" element={<EditPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
