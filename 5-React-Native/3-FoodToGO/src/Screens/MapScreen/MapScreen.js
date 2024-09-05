import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SearchBarComponent from "../../components/SearchBarCompoents/SearchBarCompoents";
import { useLocationContext } from "../../services/locations/location.context";
import MapView, { Marker } from "react-native-maps";

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export default function MapScreen() {
  const [SearchText, setSearchText] = useState("");
  const { loading, location = {}, search, restaurant } = useLocationContext();
  const latDelta =
    location?.viewport?.northeast?.lat - location?.viewport?.southwest?.lat;

  const mapRef = useRef(null);
  useEffect(() => {
    if (location?.lat && location?.lng && latDelta && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.lat,
        longitude: location.lng,
        longitudeDelta: latDelta ?? 0.0922,
        longitudeDelta: 0.02,
      });
    }
  }, [location, latDelta]);

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

      {location?.lat && location?.lng && latDelta && (
        <MapView
          ref={mapRef}
          style={{
            height: "100%",
            width: "100%",
          }}
          initialRegion={{
            latitude: location?.lat ?? 37.78825,
            longitude: location?.lng ?? -122.4324,
            latitudeDelta: latDelta ?? 0.0922,
            longitudeDelta: 0.02,
            // latitude: 37.78825,
            // longitude: -122.4324,
            // latitudeDelta: 0.0922,
          }}
        >
          {restaurant?.map((single, index) => {
            return (
              <Marker
                title={single?.name}
                key={index}
                coordinate={{
                  latitude: single?.geometry?.location?.lat,
                  longitude: single?.geometry?.location?.lng,
                }}
              ></Marker>
            );
          })}
        </MapView>
      )}
    </SafeAreaView>
  );
}
