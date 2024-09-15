import { SafeAreaView, ActivityIndicator } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocationContext } from "../../services/locations/location.context";
import MapView, { Callout, Marker } from "react-native-maps";
import MapSearch from "./MapSearch";
import { MobileScreen } from "../../RoutesScreen/RoutesScreen";
import MapCallOutComponent from "./MapCallOutComponent";

export default function MapScreen({ navigation }) {
  const [SearchText, setSearchText] = useState("");
  const { loading, location = {}, search, restaurant } = useLocationContext();
  const mapRef = useRef();
  const latDelta =
    location?.viewport?.northeast?.lat - location?.viewport?.southwest?.lat;

  useEffect(() => {
    if (location?.lat && location?.lng && latDelta && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: latDelta ?? 0.0922,
        longitudeDelta: 0.02,
      });
    }
  }, [location, latDelta]);

  return (
    <SafeAreaView>
      <MapSearch
        SearchText={SearchText}
        setSearchText={setSearchText}
        search={search}
      />
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
            latitude: location.lat ?? 37.78825,
            longitude: location.lng ?? -122.4324,
            latitudeDelta: latDelta ?? 0.0922,
            longitudeDelta: 0.02,
          }}
        >
          {restaurant?.map((SingleResturantInfo, index) => {
            return (
              <Marker
                title={SingleResturantInfo?.name}
                key={index}
                coordinate={{
                  latitude: SingleResturantInfo?.geometry?.location?.lat,
                  longitude: SingleResturantInfo?.geometry?.location?.lng,
                }}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate(MobileScreen.RESTURANT_DETAIL, {
                      SingleResturantInfo: SingleResturantInfo,
                    })
                  }
                >
                  <MapCallOutComponent
                    SingleResturantInfo={SingleResturantInfo}
                  />
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      )}
    </SafeAreaView>
  );
}
