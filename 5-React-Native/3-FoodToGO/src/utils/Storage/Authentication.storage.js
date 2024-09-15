import AsyncStorage from "@react-native-async-storage/async-storage";

export const STORAGE_KEYS = {
  isAuth: "isAuthenticated",
  user: "user",
};

export const setItem = async (key = "auth-key", value) => {
  try {
    const jasonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jasonValue);
  } catch (err) {
    console.error(err);
  }
};

export const getItem = async (key = "auth-key") => {
  try {
    const jasonValue = await AsyncStorage.getItem(key);
    return jasonValue != null ? JSON.parse(jasonValue) : null;
  } catch (err) {
    console.error(err);
  }
};

export const removeItem = async (key = "auth-key") => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
};
