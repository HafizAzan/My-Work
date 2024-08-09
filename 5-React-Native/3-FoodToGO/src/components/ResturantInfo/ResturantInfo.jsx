import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styled from "styled-components";
import { Card } from "react-native-paper";
import CustomText from "../CustomTypography/CustomTypography";

const ResturantCardBg = styled(ImageBackground)`
  height: 200px;
  justify-content: center;
`;

const ResturantCard = styled(Card)`
  margin-bottom: 10px;
  padding-left: ${(props) => props.theme.space[2]};
  padding-right: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  height: 250px;
`;

const Title = styled(CustomText)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  color: ${(color) => color.theme.colors.ui.primary};
`;

export default function ResturantInfo(props) {
  const { resturant = {} } = props;
  const { photos = ["https://picsum.photos/700"], name = "some Resturant" } =
    resturant;
  return (
    <>
      <ResturantCard>
        <ResturantCardBg source={{ uri: photos[0] }} />
        <Title variants="label">{name}</Title>
      </ResturantCard>
    </>
  );
}
