import { View, Text } from "react-native";
import React from "react";
import SearchBarComponent from "../../components/SearchBarCompoents/SearchBarCompoents";
import ResturantInfo from "../../components/ResturantInfo/ResturantInfo";

export default function ResturantScreen() {
  return (
    <>
      <SearchBarComponent />
      <ResturantInfo />
    </>
  );
}
