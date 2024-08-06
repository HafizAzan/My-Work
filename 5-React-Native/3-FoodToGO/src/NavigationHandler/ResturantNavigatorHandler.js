import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MobileScreen } from "../RoutesScreen/RoutesScreen";
import ResturantScreen from "../Screens/ResturantScreen/ResturantScreen";

const Stack = createNativeStackNavigator();

export default function ResturantNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={MobileScreen.RESTURANT_SCREEN}
        component={ResturantScreen}
      />
    </Stack.Navigator>
  );
}
