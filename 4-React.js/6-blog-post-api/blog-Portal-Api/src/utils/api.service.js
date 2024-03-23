/** @format */

import { create } from "apisauce";

const apiSauceInstance = create({
  baseURL: process.env.REACT_APP_API_URL,
});

const HeaderContent = {
  headers: {
    "Content-type": "multipart/formdata",
  },
};

const get = (url, params = {}) => apiSauceInstance.get(url, params);

const post = (url, data = {}) => apiSauceInstance.post(url, data, HeaderContent);

const put = (url, data = {}) => apiSauceInstance.put(url, data, HeaderContent);

const patch = (url, data = {}) => apiSauceInstance.patch(url, data, HeaderContent);

const deleteRequest = (url, params = {}) => apiSauceInstance.delete(url, params);

export const apiService = {
  get,
  post,
  put,
  patch,
  delete: deleteRequest,
};
