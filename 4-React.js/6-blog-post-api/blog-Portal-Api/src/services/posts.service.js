/** @format */

import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrl";

const getPosts = () => {
  return apiService.get(API_URLS.GET_POSTS);
};

export const postService = {
  getPosts,
};
