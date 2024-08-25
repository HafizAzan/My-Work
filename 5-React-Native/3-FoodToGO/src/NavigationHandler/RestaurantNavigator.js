import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MobileScreen } from "../RoutesScreen/RoutesScreen";
import ResturantScreen from "../Screens/ResturantScreen/ResturantScreen";
import { RestaurantDetail } from "../Screens/ResturantScreen/RestaurantDetail";

const RestaurantStack = createNativeStackNavigator();
export default function RestaurantNavigator() {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        animation: "slide_from_bottom",
        gestureDirection: "horizontal-inverted",
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <RestaurantStack.Screen
        name={MobileScreen.RESTURANT_SCREEN}
        component={ResturantScreen}
      />
      <RestaurantStack.Screen
        name={MobileScreen.RESTURANT_DETAIL}
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
}
