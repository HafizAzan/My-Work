import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const StyleBtn = styled(TouchableOpacity)`
  width: 62%;
  padding: 5%;
  font-size: 5%;
  background-color: white;
  border-radius: 20px;
`;

const CustomButton = ({ children, onPress, ...props }) => {
  return (
    <StyleBtn onPress={onPress} labelStyle={{ color: "blue" }} {...props}>
      {children}
    </StyleBtn>
  );
};

export default CustomButton;
