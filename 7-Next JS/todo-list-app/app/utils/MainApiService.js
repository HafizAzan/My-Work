import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosIntance = axios.create({
  baseURL: BASE_URL,
});

const ApiResponseHandler = (response) => response?.data;

const ApiRequestHandler = async (
  method,
  url,
  data = null,
  RequestConfig = {},
  isReturnResponse = false
) => {
  try {
    const response = await axiosIntance.request({
      method,
      url,
      data,
      ...RequestConfig,
    });
    return isReturnResponse ? response : ApiResponseHandler(response);
  } catch (error) {
    if (error?.response?.status == 401) {
      console.error(error);
      return error;
    }
    throw new Error(error, "Api Handler Not Working");
  }
};

const MainApiService = {
  get: (url, config = {}, isReturnResponse) =>
    ApiRequestHandler("get", url, null, config, isReturnResponse),
  post: (url, data, requestConfig = {}) =>
    ApiRequestHandler("post", url, data, requestConfig),
  patch: (url, data, requestConfig = {}) =>
    ApiRequestHandler("patch", url, data, requestConfig),
  put: (url, data, requestConfig = {}) =>
    ApiRequestHandler("put", url, data, requestConfig),
  delete: (url, config) => ApiRequestHandler("delete", url, null, config),
};

export default MainApiService;
