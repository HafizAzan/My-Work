import { ImageBackground, View } from "react-native";
import styled from "styled-components";

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
