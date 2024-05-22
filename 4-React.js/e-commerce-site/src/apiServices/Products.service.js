import { SlashApi } from "./ApiSlash"
import { MainApiUrl } from "./MainApiService"

const getAllProducts = () => {
    return MainApiUrl.get(SlashApi.PRODUCTS)
}

export const products = {
    getAllProducts
}