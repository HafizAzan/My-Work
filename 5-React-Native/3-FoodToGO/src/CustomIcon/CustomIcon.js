import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

function CustomIcon(props) {
  const { name = "", size = 20, color = "black" } = props;
  return <Ionicons name={name} size={size} color={color} />;
}

export default CustomIcon;
