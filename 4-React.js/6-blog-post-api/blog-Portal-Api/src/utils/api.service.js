/** @format */

import { create } from "apisauce";

const apiSauceInstance = create({
  baseURL: process.env.REACT_APP_API_URL,
});

const get = (url, params = {}) => apiSauceInstance.get(url, params);

const post = (url, data) =>
  apiSauceInstance.post(url, data, {
    headers: {
      "Content-type": "multipart/formdata",
    },
  });

const put = (url, data) =>
  apiSauceInstance.put(url, data, {
    headers: {
      "Content-type": "multipart/formdata",
    },
  });

const patch = (url, data) =>
  apiSauceInstance.patch(url, data, {
    headers: {
      "Content-type": "multipart/formdata",
    },
  });

const deleteRequest = (url, params = {}) => apiSauceInstance.delete(url, params);

export const apiService = {
  get,
  post,
  put,
  patch,
  delete: deleteRequest,
};
