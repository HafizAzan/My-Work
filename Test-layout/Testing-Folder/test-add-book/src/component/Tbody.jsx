/** @format */

import React from "react";
import Tr from "./Tr";

const Tbody = ({ ArraysTitleValue, ArraysAuthorValue, ArraysIsbnValue }) => {
  return (
    <tbody id="book-list">
          {ArraysTitleValue.map((singleTile, index){
            <Tr />
          })}
          
    </tbody>
  );
};
export default Tbody;
