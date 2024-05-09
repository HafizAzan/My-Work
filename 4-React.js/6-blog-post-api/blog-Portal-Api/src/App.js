/** @format */

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import FrontendLayout from "./pages/Layout/FrontendLayout";
import Home from "./pages/Home";
import { Authenticated_Path_Url, URL_Path } from "./utils/constant";
import PostDetails from "./pages/PostDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import CategoryDetails from "./pages/CategoryDetails";
import { ReactQueryDevtools } from "react-query/devtools";
import SearchService from "./pages/SearchDetails";
import UserRegister from "./pages/UserRegister";
import LoginForm from "./pages/LoginForm";
import AdminLayout from "./pages/AdminLayout/Layout/AdminLayout";
import Dashboard from "./pages/AdminLayout/Dashboard";
import { ServiceToken } from "./utils/auth";
import AdminCategories from "./pages/AdminLayout/AdminCategories";
import AdminAddCategories from "./pages/AdminLayout/AdminAddCategories";
import AdminUser from "./pages/AdminLayout/AdminUser";
import AdminAddUser from "./pages/AdminLayout/AdminAddUser";
import AdminPosts from "./pages/AdminLayout/AdminPosts";
import AdminAddPost from "./pages/AdminLayout/AdminAddPost";
import AdminComments from "./pages/AdminLayout/AdminComments";

const queryClient = new QueryClient();

function App() {
  const isUserIsLoggedIn = ServiceToken.isUserIsLogged();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<FrontendLayout />}>
            <Route path={URL_Path.Home} element={<Home />} />
            <Route path={URL_Path.post_details} element={<PostDetails />} />
            <Route path={URL_Path.Category_details} element={<CategoryDetails />} />
            <Route path={URL_Path.Search_Details} element={<SearchService />} />
            <Route path={URL_Path.Register} element={<UserRegister />} />
            <Route path={URL_Path.Login} element={<LoginForm />} />
          </Route>

          {isUserIsLoggedIn &&
            <Route element={<AdminLayout />}>
            <Route path={Authenticated_Path_Url.DashBoard} element={<Dashboard />} />
            <Route path={Authenticated_Path_Url.Admin_Category} element={<AdminCategories />}  />
            <Route path={Authenticated_Path_Url.ADD_CATEGORY} element={<AdminAddCategories />} />
            <Route path={Authenticated_Path_Url.EDIT_CATEGORY} element={<AdminAddCategories />}/>
            <Route path={Authenticated_Path_Url.USER} element={<AdminUser />}/>
            <Route path={Authenticated_Path_Url.ADD_USER} element={<AdminAddUser />} /> 
            <Route path={Authenticated_Path_Url.EDIT_USER} element={<AdminAddUser />} />
            <Route path={Authenticated_Path_Url.POST} element={<AdminPosts />} />
            <Route path={Authenticated_Path_Url.ADD_POST} element={<AdminAddPost />} /> 
            <Route path={Authenticated_Path_Url.EDIT_POST} element={<AdminAddPost />} /> 
            <Route path={Authenticated_Path_Url.COMMENTS} element={<AdminComments />} /> 
              
              
              
              
          </Route>}
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
