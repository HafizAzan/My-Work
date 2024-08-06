import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/Login/LoginScreen";
import RegisterScreen from "../Screens/Register/Register";
import AccountScreen from "../Screens/AccountScreen/AccountScreen";
import { MobileScreen } from "../RoutesScreen/RoutesScreen";

const Stack = createNativeStackNavigator();

export default function LoginNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={MobileScreen.ACCOUNT_SCREEN}
        component={AccountScreen}
      />

      <Stack.Screen name={MobileScreen.LOGIN_SCREEN} component={LoginScreen} />

      <Stack.Screen
        name={MobileScreen.REGITER_SCREEN}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
}
