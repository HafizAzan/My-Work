import React, { createContext, useContext, useState } from "react";
import {
  LoginFirebaseRequest,
  RegisterFirebaseRequest,
} from "./Authentication.service";

export const AuthenticationContext = createContext();
function AuthenticationContextComponent({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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
      })
      .catch((error) => setError(error?.message?.toString()));

    setLoading(false);
  };
  return (
    <AuthenticationContext.Provider
      value={{
        onRegiterForm,
        onLoginForm,
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
