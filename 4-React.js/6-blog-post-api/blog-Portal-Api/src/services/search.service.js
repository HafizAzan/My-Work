/** @format */

import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrl";

const SearchFilter = (data = {}) => apiService.post(API_URLS.search_Filter, data);

export const ServieSearch = {
  SearchFilter,
};
