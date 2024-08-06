import { SafeAreaView, StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components";
import theme from "./src/utils/theme";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import {
  Lato_400Regular,
  useFonts as useLatoFont,
} from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import AccountScreen from "./src/Screens/AccountScreen/AccountScreen";
import LoginScreen from "./src/Screens/Login/LoginScreen";
import RegisterScreen from "./src/Screens/Register/Register";
import "./src/Config/ConfigFireBase";
import AuthenticationContextComponent from "./src/ContextAPIs/Authentication/Authentication.context";
import NavigationHandlerComponent from "./src/components/NavigationHandlerComponent/NavigationHandlerComponent";

const CustomSafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

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
        <CustomSafeArea>
          <NavigationHandlerComponent />
        </CustomSafeArea>
      </AuthenticationContextComponent>
    </ThemeProvider>
  );
}
