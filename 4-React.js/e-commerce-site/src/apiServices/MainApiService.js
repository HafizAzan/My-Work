import { create } from "apisauce";

const apiSauceIntance = create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

const HeaderContent = {
    headers: {
        "Content-type": "application/json"
    }
}

const get = (url, params = {}) => apiSauceIntance.get(url, params);
const post = (url, data = {}) => apiSauceIntance.post(url, data, HeaderContent);
const put = (url, data = {}) => apiSauceIntance.put(url, data, HeaderContent);
const patch = (url, data = {}) => apiSauceIntance.patch(url, data, HeaderContent);
const deleteRequest = (url, params = {}) => apiSauceIntance.delete(url, params);


export const MainApiUrl = {
    get,
    post,
    put,
    patch,
    delete: deleteRequest
}

