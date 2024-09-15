import { View } from "react-native";
import React from "react";
import SearchBarComponent from "../../components/SearchBarCompoents/SearchBarCompoents";
import styled from "styled-components";

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export default function MapSearch({ SearchText, setSearchText, search }) {
  return (
    <SearchContainer>
      <SearchBarComponent
        SearchText={SearchText}
        setSearchText={setSearchText}
        search={search}
        icon="map"
      />
    </SearchContainer>
  );
}
