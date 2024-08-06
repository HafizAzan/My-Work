import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

export const CustomSearchBarStyled = styled(Searchbar)`
  margin-left: ${(props) => props.theme.space[2]};
  margin-right: ${(props) => props.theme.space[2]};
`;

export default function SearchBarComponent({
  isFavouriteToggle = false,
  onFavouriteHanlder = () => {},
}) {
  const [SearchText, setSearchText] = useState("");
  return (
    <>
      <CustomSearchBarStyled
        placeholder="Search for a location"
        onIconPress={onFavouriteHanlder}
        icon={isFavouriteToggle ? "heart" : "heart-outline"}
        value={SearchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={() => console.log(SearchText, "SearchText...")}
      />
    </>
  );
}
