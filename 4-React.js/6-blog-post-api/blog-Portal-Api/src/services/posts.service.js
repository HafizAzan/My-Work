/** @format */

import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrl";

const getPosts = () => {
  return apiService.get(API_URLS.GET_POSTS);
};

const DeletePostById = (postId) => {
  return apiService.delete(`${API_URLS.GET_POSTS}/${postId}`);
};

const getPostById = (postID) => {
  return apiService.get(`${API_URLS.GET_POSTS}/${postID}`);
};

const StorePosts = (data = {} ) => {
  return apiService.post(API_URLS.GET_POSTS,data);
};


const UpdatePostData = (postId  , data) => {
  return apiService.put(API_URLS.UPDATE_POST.replace(":postId", postId), data, {
    headers: {
      "Content-type": "application/json",
    }
  }) 
 }
 

export const postService = {
  getPosts,
  getPostById,
  DeletePostById,
  StorePosts,
  UpdatePostData,
};
