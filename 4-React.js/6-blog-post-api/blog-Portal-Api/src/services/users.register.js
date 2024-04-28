/** @format */

import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrl";

const Register = (data) => {
  return apiService.post(API_URLS.Register, data);
};

const LoginForm = (data) => {
  return apiService.post(API_URLS.Login, data);
};

const getUsersPost = () => {
  return apiService.get(API_URLS.User);
};

const deleteUsersPostId = (userId) => {
  return apiService.delete(`${API_URLS.User}/${userId}`);
};

export const RegisterUser = {
  Register,
  LoginForm,
  getUsersPost,
  deleteUsersPostId,
};
