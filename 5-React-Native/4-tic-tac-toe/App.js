import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./container/HomeScreen";
import TicTacToe from "./container/Tic-Tac-Toe";
import { enableScreens } from "react-native-screens";
import { SCREEN_ROUTE } from "./RouteConstant/ScreenRoute";
import AiGame from "./container/AI.game";
import ChooseScreen from "./container/ChooseScreen";

enableScreens();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREEN_ROUTE.HOME}
      >
        <Stack.Screen name={SCREEN_ROUTE.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREEN_ROUTE.GAME} component={TicTacToe} />
        <Stack.Screen name={SCREEN_ROUTE.COM_GAME} component={AiGame} />
        <Stack.Screen name={SCREEN_ROUTE.CHOOSE_KEY} component={ChooseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
