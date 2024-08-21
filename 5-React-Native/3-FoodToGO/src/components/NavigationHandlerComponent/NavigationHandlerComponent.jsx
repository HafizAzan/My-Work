import React from "react";
import LoginNavigator from "../../NavigationHandler/LoginNavigator";
import { NavigationContainer } from "@react-navigation/native";
import CustomBottomNavigation from "../../NavigationHandler/CustomBottomNavigation";

export default function NavigationHandlerComponent() {
  // const { isAuthenticated } = useAuthenticationContext();
  const isAuthenticated = true;
  return (
    <NavigationContainer>
      {isAuthenticated ? <CustomBottomNavigation /> : <LoginNavigator />}
    </NavigationContainer>
  );
}
