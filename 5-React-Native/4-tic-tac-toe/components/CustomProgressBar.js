import React from "react";
import * as Progress from "react-native-progress";

const CustomProgressBar = ({ progress }) => {
  return (
    <Progress.Bar
      progress={progress}
      width={200}
      height={10}
      color={"#3b5998"}
      unfilledColor={"#e0e0e0"}
      borderRadius={8}
    />
  );
};

export default CustomProgressBar;
