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

const CustomDafeArea = styled(SafeAreaView)`
  flex: 1;
  margintop: ${StatusBar.currentHeight};
`;

const Stack = createNativeStackNavigator();

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
      <CustomDafeArea>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={AccountScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CustomDafeArea>
    </ThemeProvider>
  );
}
