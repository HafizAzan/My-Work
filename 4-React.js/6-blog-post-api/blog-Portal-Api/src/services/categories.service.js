/** @format */

import { apiService } from "../utils/api.service";
import { URL_Path } from "../utils/constant";
import { API_URLS } from "./apiUrl";

const getCategory = () => {
  return apiService.get(API_URLS.GET_CATEGORY);
};

const getCategoryById = (catID) => {
  return apiService.get(`${API_URLS.GET_CATEGORY}/${catID}`);
};

export const CategoryService = {
  getCategory,
  getCategoryById,
};
