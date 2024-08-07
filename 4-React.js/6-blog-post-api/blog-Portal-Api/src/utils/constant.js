/** @format */

export const URL_Path = {
  Home: "/",
  post_details: "/post-details/:postID",
  Category_details: "/category/:catID",
  Search_Details: "Search-page/:query",
  Register: "/register-form",
  Login: "/login-form",
};

export const Authenticated_Path_Url = {
  DashBoard: "/admin/dashboard",
  Admin_Category: "/admin/categories",
  ADD_CATEGORY: "/admin/add-category",
  EDIT_CATEGORY: "/admin/categories/edit/:categoryId",
  USER: "/admin/user",
  ADD_USER: "/admin/users/add-user",
  EDIT_USER:"/admin/users/:userId",
  POST: "/admin/post",
  ADD_POST: "/admin/posts/add-post",
  EDIT_POST: "/admin/posts/:postId",
  COMMENTS:"admin/comments"
};

export const Regex_Pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
export const Regex_Message = `Password should be contains at least one alphabet and
contains at least one digit and is at least 8 characters long.`;
