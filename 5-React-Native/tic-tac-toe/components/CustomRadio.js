import React from "react";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";

const CustomRadioButton = ({ checked, onPress }) => {
  return (
    <View>
      <RadioButton
        value="option"
        status={checked ? "checked" : "unchecked"}
        onPress={onPress}
      />
    </View>
  );
};

export default CustomRadioButton;
