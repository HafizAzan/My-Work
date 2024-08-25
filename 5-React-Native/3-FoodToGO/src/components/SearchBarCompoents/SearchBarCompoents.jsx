import React, { useEffect, useState } from "react";
import { Searchbar, Text } from "react-native-paper";
import styled from "styled-components";
import { useLocationContext } from "../../services/locations/location.context";

export const CustomSearchBarStyled = styled(Searchbar)`
  margin-left: ${(props) => props.theme.space[2]};
  margin-right: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export default function SearchBarComponent({
  isFavouriteToggle = false,
  onFavouriteHanlder = () => {},
  search,
  setSearchText,
  SearchText,
  ...props
}) {
  return (
    <>
      <CustomSearchBarStyled
        placeholder="Search for a location"
        onIconPress={onFavouriteHanlder}
        icon={isFavouriteToggle ? "heart" : "heart-outline"}
        value={SearchText}
        onChangeText={setSearchText}
        onSubmitEditing={() => search(SearchText)}
        {...props}
      />
    </>
  );
}
