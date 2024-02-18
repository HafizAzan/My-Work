/** @format */
import React from "react";
import { memo } from "react";
const DisplayCount = (props) => {
  console.log(props, "props");
  return <h1>count = {props.count}</h1>;
};

export default memo(DisplayCount);
