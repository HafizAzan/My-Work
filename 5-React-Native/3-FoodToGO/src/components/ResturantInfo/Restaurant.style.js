import styled from "styled-components";
import { Card } from "react-native-paper";
import TextComponent from "../TextComponent/TextComponent";
import { Image, View } from "react-native";

export const ResturantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: 10px;
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[3]};
`;

export const ResturantCardBg = styled(Card.Cover)`
  padding: 16px;
`;

export const CardSection = styled(View)`
  padding: 15px;
`;

export const Title = styled(TextComponent)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  color: ${(color) => color.theme.colors.ui.primary};
`;

export const CardInnerSection = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RatingContainer = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const CardIconContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CustomImage = styled(Image)`
  width: 18px;
  height: 18px;
  margin-left: 20px;
  margin-right: 10px;
`;
