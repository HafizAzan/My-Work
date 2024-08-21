import React from "react";
import SearchBarComponent from "../../components/SearchBarCompoents/SearchBarCompoents";
import ResturantInfo from "./ResturantInfo";
import { RestuarantListing } from "../../components/CustomScrollView/CustomScrollViewFlat";

export default function ResturantScreen() {
  const restaurant = [1, 2, 3, 4, 5];
  return (
    <>
      <SearchBarComponent />
      <RestuarantListing
        key={restaurant}
        data={restaurant}
        renderItem={(SingleResturantInfo) => <ResturantInfo />}
      />
    </>
  );
}
