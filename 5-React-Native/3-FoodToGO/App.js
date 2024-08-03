import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import styled, { ThemeProvider } from "styled-components";
import theme from "./src/utils/theme";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import {
  Lato_400Regular,
  useFonts as useLatoFont,
} from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "./src/Screens/AccountScreen/AccountScreen";
import LoginScreen from "./src/Screens/Login/LoginScreen";
import RegisterScreen from "./src/Screens/Register/Register";
import "./src/Config/ConfigFireBase";
import AuthenticationContextComponent from "./src/ContextAPIs/Authentication/Authentication.context";

const CustomDafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const Stack = createNativeStackNavigator();

export const MobileScreen = {
  ACCOUNT_SCREEN: "Home",
  LOGIN_SCREEN: "Login",
  REGITER_SCREEN: "Register",
};

export default function App() {
  const [loaded] = useFonts({
    Oswald_400Regular,
  });

  const [latoFontLoaded] = useLatoFont({
    Lato_400Regular,
  });

  if (!loaded || !latoFontLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextComponent>
        <CustomDafeArea>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen
                name={MobileScreen.ACCOUNT_SCREEN}
                component={AccountScreen}
              />
              <Stack.Screen
                name={MobileScreen.LOGIN_SCREEN}
                component={LoginScreen}
              />
              <Stack.Screen
                name={MobileScreen.REGITER_SCREEN}
                component={RegisterScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </CustomDafeArea>
      </AuthenticationContextComponent>
    </ThemeProvider>
  );
}
