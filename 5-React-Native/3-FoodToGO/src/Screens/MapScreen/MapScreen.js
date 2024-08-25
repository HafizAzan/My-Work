import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import SearchBarComponent from "../../components/SearchBarCompoents/SearchBarCompoents";
import { useLocationContext } from "../../services/locations/location.context";
import MapView from "react-native-maps";

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export default function MapScreen() {
  const [SearchText, setSearchText] = useState("");
  const { searchQuery, loading, location = {}, search } = useLocationContext();

  return (
    <SafeAreaView>
      <SearchContainer>
        <SearchBarComponent
          SearchText={SearchText}
          setSearchText={setSearchText}
          search={search}
          icon="map"
        />
      </SearchContainer>
      {loading && (
        <ActivityIndicator size={50} animating={true} color="#0000ff" />
      )}
      {location && searchQuery && (
        <MapView
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      )}
    </SafeAreaView>
  );
}
