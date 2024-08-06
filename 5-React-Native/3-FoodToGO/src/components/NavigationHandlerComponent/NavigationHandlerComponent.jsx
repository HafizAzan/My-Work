import { View, Text } from "react-native";
import React from "react";
import { useAuthenticationContext } from "../../ContextAPIs/Authentication/Authentication.context";
import LoginNavigator from "../../NavigationHandler/LoginNavigator";
import { NavigationContainer } from "@react-navigation/native";
import ResturantNavigator from "../../NavigationHandler/ResturantNavigatorHandler";

export default function NavigationHandlerComponent() {
  const { isAuthenticated } = useAuthenticationContext();
  return (
    <NavigationContainer>
      {isAuthenticated ? <ResturantNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
}
