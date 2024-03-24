/** @format */

import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrl";

const getPosts = () => {
  return apiService.get(API_URLS.GET_POSTS);
};

const getPostById = (postID) => {
  return apiService.get(`${API_URLS.GET_POSTS}/${postID}`);
};

export const postService = {
  getPosts,
  getPostById,
};
