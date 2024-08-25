import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components";
import theme from "./src/utils/theme";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import {
  Lato_400Regular,
  useFonts as useLatoFont,
} from "@expo-google-fonts/lato";
import "./src/Config/ConfigFireBase";
import AuthenticationContextComponent from "./src/ContextAPIs/Authentication/Authentication.context";
import NavigationHandlerComponent from "./src/components/NavigationHandlerComponent/NavigationHandlerComponent";
import LocationContextComponent from "./src/services/locations/location.context";

const CustomSafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
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
      <CustomSafeArea>
        <AuthenticationContextComponent>
          <LocationContextComponent>
            <NavigationHandlerComponent />
          </LocationContextComponent>
        </AuthenticationContextComponent>
      </CustomSafeArea>
    </ThemeProvider>
  );
}
