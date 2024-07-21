import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import styled, { ThemeProvider } from "styled-components";
import theme from "./src/utils/theme";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import {
  Lato_400Regular,
  useFonts as useLatoFont,
} from "@expo-google-fonts/lato";

const CustomDafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const Title = styled(Text)`
  font-size: ${(props) => props.theme.sizes[3]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.body};
`;
export default function App() {
  const [loaded] = useFonts({
    Oswald_400Regular,
  });

  const [latoFontLoaded] = useLatoFont({
    Lato_400Regular,
  });

  if (!loaded || latoFontLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <CustomDafeArea>
        <Title>Hello World</Title>
      </CustomDafeArea>
    </ThemeProvider>
  );
}
