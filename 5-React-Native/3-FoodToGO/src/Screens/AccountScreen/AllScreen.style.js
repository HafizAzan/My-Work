import { ImageBackground, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styled from "styled-components";
import { colors } from "../../utils/theme/colors";

export const AccountScreenStyle = styled(ImageBackground).attrs({
  source: require("../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-item: center;
  justify-center: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AuthBtn = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  margin: ${(props) => props.theme.space[2]};
`;

export const CenterAlignContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-item: center;
`;

export const Title = styled(Text)`
  font-size: ${(props) => props.theme.sizes[2]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.body};
  margin-bottom: 15px;
  text-align: center;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
  margin-bottom: ${(margin) => margin.theme.space[4]};
`;

export const ErrorContainer = styled(View)`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-bottom: ${(margin) => margin.theme.space[4]};
`;

export const CommonPasswordProps = {
  textContentType: "password",
  secureTextEntry: true,
  autoCapitalize: "none",
};
