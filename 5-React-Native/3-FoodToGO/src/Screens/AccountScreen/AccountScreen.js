import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import { AccountCover, AccountScreenStyle } from "./AccountScreen.style";

const Title = styled(Text)`
  font-size: ${(props) => props.theme.sizes[3]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.body};
`;

export default function AccountScreen() {
  return (
    <AccountScreenStyle>
      <AccountCover />
      <Title>Hello World</Title>
    </AccountScreenStyle>
  );
}
