/** @format */

import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrl";

const getCategory = () => {
  return apiService.get(API_URLS.GET_CATEGORY);
};

const getCategoryById = (catID) => {
  return apiService.get(`${API_URLS.GET_CATEGORY}/${catID}`);
};

const AddCategory = (payload) => {
  return apiService.post(API_URLS.GET_CATEGORY,payload);
};

const deleteCategoryById = (catId) => {
  return apiService.delete(`${API_URLS.GET_CATEGORY}/${catId}`);
};

const EditCategoryById = (catID,payload) => {
  return apiService.put(`${API_URLS.GET_CATEGORY}/${catID}`,payload);
};

export const CategoryService = {
  getCategory,
  getCategoryById,
  AddCategory,
  deleteCategoryById,
  EditCategoryById,
};
