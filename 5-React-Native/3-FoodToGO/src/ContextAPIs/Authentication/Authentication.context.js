import React, { createContext, useContext, useEffect, useState } from "react";
import {
  LoginFirebaseRequest,
  RegisterFirebaseRequest,
} from "./Authentication.service";
import {
  getItem,
  removeItem,
  setItem,
  STORAGE_KEYS,
} from "../../utils/Storage/Authentication.storage";

export const AuthenticationContext = createContext();
function AuthenticationContextComponent({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const load = async () => {
      const auth = await getItem(STORAGE_KEYS.isAuth);
      const user = await getItem(STORAGE_KEYS.user);

      if (auth & user) {
        setIsAuthenticated(auth);
        setUser(user);
      }
    };
    load();
  }, []);

  const onRegiterForm = async (params) => {
    const { email, password, ConfirmPassword } = params;
    setError("");
    if (password !== ConfirmPassword) setError("Error: Passwords do not match");
    setLoading(true);
    await RegisterFirebaseRequest(email, password)
      .then((userInformation) => {
        setUser(userInformation);
        setIsAuthenticated(true);
        console.log("logged in : ", userInformation);
      })
      .catch((error) => setError(error?.message?.toString()));

    setLoading(false);
  };
  const onLoginForm = async (params) => {
    const { email, password } = params;
    setError("");
    setLoading(true);
    await LoginFirebaseRequest(email, password)
      .then((userInformation) => {
        setUser(userInformation);
        setIsAuthenticated(true);
        console.log("logged in : ", userInformation);
        setItem(STORAGE_KEYS.isAuth, true);
        setItem(STORAGE_KEYS.user, true);
      })
      .catch((error) => setError(error?.message?.toString()));

    setLoading(false);
  };

  const onLogoutForm = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsAuthenticated(false);
      setUser(null);
      removeItem(STORAGE_KEYS.isAuth);
      removeItem(STORAGE_KEYS.user);
    }, 1000);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        onRegiterForm,
        onLoginForm,
        onLogoutForm,
        user,
        error,
        loading,
        isAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContextComponent;

export const useAuthenticationContext = () => {
  return useContext(AuthenticationContext);
};
