import { SlashApi } from "../apiServices/ApiSlash"
import { MainApiUrl } from "../apiServices/MainApiService"

const LoginUserService = (payload) => {
    return MainApiUrl.post(SlashApi.LOGIN, payload)
}

export const UserService = {
    LoginUserService
}