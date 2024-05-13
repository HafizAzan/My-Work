import { API_URLS } from "./apiUrl";
import { apiService } from "../utils/api.service";
const getDashBaord = () => {
    return apiService.get(API_URLS.DASHBOARD);
  };

export const DashboardService = {
    getDashBaord ,
} 