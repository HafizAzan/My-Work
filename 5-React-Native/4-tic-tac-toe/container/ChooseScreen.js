import React, { useState } from "react";
import {
  CusText,
  CustomSafeAreaView,
  StyledText,
} from "../styles/style-service";
import { Alert, Image, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import CustomRadioButton from "../components/CustomRadio";
import CustomButton from "../components/CustomButton";
import { SCREEN_ROUTE } from "../RouteConstant/ScreenRoute";

const CustomView = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const ChooseScreen = ({ route, navigation }) => {
  const { mode } = route.params;
  const [selectedOption, setSelectedOption] = useState(null);
  const handleNavigation = () => {
    if (selectedOption) {
      if (mode === "PlayerWithComputer") {
        navigation.navigate(SCREEN_ROUTE.COM_GAME, { selectedOption });
      } else {
        navigation.navigate(SCREEN_ROUTE.GAME, { selectedOption });
      }
    } else {
      Alert.alert("Please select an option before proceeding!");
    }
  };

  return (
    <CustomSafeAreaView>
      <View style={styles.flex}>
        <StyledText style={styles.text}>Pick Your Side</StyledText>
        <CustomView>
          <Image
            source={require("../image/x-rem.png")}
            style={{ width: 160, height: 150 }}
          />
          <Image
            source={require("../image/o.png")}
            style={{ width: 120, height: 120 }}
          />
        </CustomView>
        <View style={styles.view}>
          <CustomRadioButton
            checked={selectedOption === "X"}
            onPress={() => setSelectedOption("X")}
          />
          <CustomRadioButton
            checked={selectedOption === "O"}
            onPress={() => setSelectedOption("O")}
          />
        </View>
        <View style={styles.viewBtn}>
          <CustomButton style={styles.boxShadow} onPress={handleNavigation}>
            <CusText>Continue</CusText>
          </CustomButton>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default ChooseScreen;

const styles = StyleSheet.create({
  view: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 200,
  },
  boxShadow: {
    width: 150,
    shadowColor: "black",
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  },
  viewBtn: {
    display: "flex",
    alignItems: "center",
    marginTop: 25,
  },
  SafeArea: {
    justifyContent: "center",
  },
  flex: {
    marginTop: 90,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
  },
  text: {
    fontSize: 30,
  },
});
