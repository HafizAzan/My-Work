import { SlashApi } from "./ApiSlash"
import { MainApiUrl, ThirdApiUrl } from "./MainApiService"

const getAllProducts = () => {
    return MainApiUrl.get(SlashApi.PRODUCTS)
}

const getProductById = (WomenclothId) => {
    return MainApiUrl.get(`${SlashApi.PRODUCTS}/${WomenclothId}`)
}


export const AllProducts = {
    getAllProducts,
    getProductById,
}