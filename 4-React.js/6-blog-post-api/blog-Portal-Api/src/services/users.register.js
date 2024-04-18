/** @format */

import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrl";

const Register = (data) => {
  return apiService.post(API_URLS.Register, data);
};

const LoginForm = (data) => {
  return apiService.post(API_URLS.Login, data);
};

export const RegisterUser = {
  Register,
  LoginForm,
};
