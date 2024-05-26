import { create } from "apisauce";

const apiSauceIntance = create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

const HeaderContent = {
    headers: {
        "Content-type": "application/json"
    }
}

const apiSauceIntance2 = create({
    baseURL: process.env.REACT_APP_SECOND_URL,
    headers: {
        "Content-type": "application/json"
    }
});

const apiSauceIntance3 = create({
    baseURL: process.env.REACT_APP_FAKE_JSON_URL,
    headers: {
        "Content-type": "application/json"
    }
});



const get = (url, params = {}) => apiSauceIntance.get(url, params);
const post = (url, data = {}) => apiSauceIntance.post(url, data, HeaderContent);
const put = (url, data = {}) => apiSauceIntance.put(url, data, HeaderContent);
const patch = (url, data = {}) => apiSauceIntance.patch(url, data, HeaderContent);
const deleteRequest = (url, params = {}) => apiSauceIntance.delete(url, params);


const get2 = (url, params = {}) => apiSauceIntance2.get(url, params);
const post2 = (url, data = {}) => apiSauceIntance2.post(url, data);
const put2 = (url, data = {}) => apiSauceIntance2.put(url, data);
const patch2 = (url, data = {}) => apiSauceIntance2.patch(url, data);
const deleteRequest2 = (url, params = {}) => apiSauceIntance2.delete(url, params);


const get3 = (url, params = {}) => apiSauceIntance3.get(url, params);
const post3 = (url, data = {}) => apiSauceIntance3.post(url, data);
const put3 = (url, data = {}) => apiSauceIntance3.put(url, data);
const patch3 = (url, data = {}) => apiSauceIntance3.patch(url, data);
const deleteRequest3 = (url, params = {}) => apiSauceIntance3.delete(url, params);

export const MainApiUrl = {
    get,
    post,
    put,
    patch,
    delete: deleteRequest
}

export const SecondApiUrl = {
    get2,
    post2,
    put2,
    patch2,
    deleteRequest2,
}

export const ThirdApiUrl = {
    get3,
    post3,
    put3,
    patch3,
    deleteRequest3,
}