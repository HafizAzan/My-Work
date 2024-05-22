export const TOKEN_NAME = "Token";

const saveToken = (token) => {
    if (!token) return null
    localStorage.setItem(TOKEN_NAME, token)
};

const removetoken = () => {
    localStorage.removeItem(TOKEN_NAME)
};

const IsLoggedIn = () => {
    const token = localStorage.getItem(TOKEN_NAME);
    if (!token) return false
    return true
};

export const AuthApiService = {
    saveToken,
    removetoken,
    IsLoggedIn,
};