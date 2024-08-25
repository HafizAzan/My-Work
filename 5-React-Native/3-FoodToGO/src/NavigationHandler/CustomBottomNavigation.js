import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MobileScreen } from "../RoutesScreen/RoutesScreen";
import ResturantScreen from "../Screens/ResturantScreen/ResturantScreen";
import SettingScreen from "../Screens/SettingScreen/SettingScreen";
import CustomIcon from "../CustomIcon/CustomIcon";
import MapScreen from "../Screens/MapScreen/MapScreen";
import RestaurantNavigator from "./RestaurantNavigator";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurant: "restaurant",
  map: "map",
  setting: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];
  return {
    headerShown: false,
    tabBarIcon: ({ size, color }) => (
      <CustomIcon name={iconName} size={size} color={color} />
    ),
  };
};
function CustomBottomNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
      screenOptions={createScreenOptions}
    >
      <Tab.Screen
        name={MobileScreen.RESTURANT}
        component={RestaurantNavigator}
      />
      <Tab.Screen name={MobileScreen.MAP} component={MapScreen} />
      <Tab.Screen name={MobileScreen.SETTING} component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default CustomBottomNavigation;
