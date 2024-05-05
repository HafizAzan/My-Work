/** @format */

import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrl";

const Register = (data) => {
  return apiService.post(API_URLS.Register, data);
};

const addUser = (data) => {
  return apiService.post(API_URLS.Register, data,{
    headers: {
      "Content-type": "multipart/formdata",
      // "Content-type": "application/json",
    }
  }
  );
};

const LoginForm = (data) => {
  return apiService.post(API_URLS.Login, data);
};

const getUsersPost = () => {
  return apiService.get(API_URLS.User);
};

const getUserPostById = (userId) => {
  return apiService.get(`${API_URLS.User}/${userId}`);
};

const deleteUsersPostId = (userId) => {
  return apiService.delete(`${API_URLS.User}/${userId}`);
};

const userName = (payload) => {
 return apiService.post(API_URLS.User,payload) 
}

const UpdateUserData = (userId  , data) => {
  return apiService.put(API_URLS.UPDATE_USER.replace(":userId", userId), data, {
    headers: {
      "Content-type": "application/json",
    }
  }) 
 }
 

export const RegisterUser = {
  Register,
  LoginForm,
  getUsersPost,
  deleteUsersPostId,
  userName,
  addUser,
  getUserPostById,
  UpdateUserData
};
