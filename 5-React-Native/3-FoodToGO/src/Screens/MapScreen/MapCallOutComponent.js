import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import TextComponent from "../../components/TextComponent/TextComponent";

const Item = styled(View)`
  padding: 10px;
  max-width: 200px;
  align-items: center;
`;

const CustomImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export default function MapCallOutComponent(props) {
  const { SingleResturantInfo } = props;
  const CustomizeImageComponent = CustomImage;
  return (
    <Item>
      <CustomizeImageComponent source={{ uri: SingleResturantInfo.photos }} />
      <TextComponent center variant="caption" numberOfLines={3}>
        {SingleResturantInfo.name}
      </TextComponent>
    </Item>
  );
}
