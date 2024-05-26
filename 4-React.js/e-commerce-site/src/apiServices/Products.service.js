import { SlashApi } from "./ApiSlash"
import { MainApiUrl, ThirdApiUrl } from "./MainApiService"

const getAllProducts = () => {
    return MainApiUrl.get(SlashApi.PRODUCTS)
}

const KidsProducts = () => {
    return ThirdApiUrl.get3()
}


export const AllProducts = {
    getAllProducts,
    KidsProducts
}