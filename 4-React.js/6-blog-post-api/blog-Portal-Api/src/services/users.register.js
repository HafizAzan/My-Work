/** @format */

import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrl";

const Register = (data) => {
  return apiService.post(API_URLS.Register, data);
};
export const RegisterUser = {
  Register,
};
