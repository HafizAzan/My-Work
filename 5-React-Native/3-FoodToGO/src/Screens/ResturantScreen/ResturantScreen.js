import React, { useState } from "react";
import SearchBarComponent from "../../components/SearchBarCompoents/SearchBarCompoents";
import ResturantInfo from "./ResturantInfo";
import { RestuarantListing } from "../../components/CustomScrollView/CustomScrollViewFlat";
import { useLocationContext } from "../../services/locations/location.context";
import { ActivityIndicator } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import TextComponent from "../../components/TextComponent/TextComponent";
import { MobileScreen } from "../../RoutesScreen/RoutesScreen";

const NoRestaurantWrapper = styled(View)`
  margin: 0 auto;
  margin-top: 40px;
  flex: 1;
`;

export default function ResturantScreen({ navigation }) {
  const {
    loading,
    restaurant = [],
    searchQuery,
    search,
  } = useLocationContext();
  const [SearchText, setSearchText] = useState("");

  return (
    <>
      <SearchBarComponent
        search={search}
        SearchText={SearchText}
        setSearchText={setSearchText}
      />
      {loading && (
        <ActivityIndicator size={20} animating={true} color="#0000ff" />
      )}
      {restaurant?.length > 0 ? (
        <RestuarantListing
          data={restaurant}
          renderItem={(SingleResturantInfo) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(MobileScreen.RESTURANT_DETAIL, {
                  SingleResturantInfo: SingleResturantInfo?.item,
                });
              }}
            >
              <ResturantInfo SingleResturantInfo={SingleResturantInfo.item} />
            </TouchableOpacity>
          )}
        />
      ) : (
        searchQuery?.length > 0 &&
        !loading && (
          <NoRestaurantWrapper>
            <TextComponent variant="label">No Retaurant Found!</TextComponent>
          </NoRestaurantWrapper>
        )
      )}
    </>
  );
}
