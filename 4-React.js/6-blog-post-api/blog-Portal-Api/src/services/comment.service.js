/** @format */

import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrl";

const commentStore = (data = {}) => {
  return apiService.post(API_URLS.Comment_Store, data);
};

const getComment = () => {
  return apiService.get(API_URLS.COMMENT)
}

const approveComment = (commentId) => {
  return apiService.get(`${API_URLS.COMMENT}/approve/${commentId}`)
}

const unapproveComment = (commentId) => {
  return apiService.get(`${API_URLS.COMMENT}/unapprove/${commentId}`)
}

const DeleteCommentById = (commentId) => {
  return apiService.delete(`${API_URLS.COMMENT}/${commentId}`)
}

export const StoreComment = {
  commentStore,
  getComment,
  DeleteCommentById,
  approveComment,
  unapproveComment,
};
