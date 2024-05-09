/** @format */

import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrl";

const commentStore = (data = {}) => {
  return apiService.post(API_URLS.Comment_Store, data);
};

const getComment = () => {
  return apiService.get(API_URLS.COMMENT)
}

export const StoreComment = {
  commentStore,
  getComment,
};
