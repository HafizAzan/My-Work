/** @format */

import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrl";

const commentStore = (data = {}) => {
  return apiService.post(API_URLS.Comment_Store, data);
};

export const StoreComment = {
  commentStore,
};
