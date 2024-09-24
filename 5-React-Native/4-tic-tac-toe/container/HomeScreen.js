import React, { useEffect, useState } from "react";
import {
  BtnView,
  CusText,
  CustomSafeAreaView,
  StyledText,
  StyledView,
} from "../styles/style-service";
import CustomButton from "../components/CustomButton";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import CustomProgressBar from "../components/CustomProgressBar";
import { SCREEN_ROUTE } from "../RouteConstant/ScreenRoute";
import styled from "styled-components/native";
import { Image, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [progress, setProgress] = useState(0);
  const [loaded] = useFonts({
    Roboto_400Regular,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 1) {
          clearInterval(interval);
          return 1;
        }
        return prevProgress + 0.1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <CustomSafeAreaView>
      <StyledView>
        <View style={styles.view}>
          <Image
            source={require("../image/x-o.jpg")}
            style={{ width: 250, height: 138 }}
          />
        </View>
        {progress < 1 ? (
          <View style={styles.progressView}>
            <CustomProgressBar progress={progress} />
          </View>
        ) : (
          <>
            <StyledText style={styles.styledText}>Tic Tac Toe</StyledText>
            <BtnView>
              <CustomButton
                style={[styles.boxShadow, styles.backgroundColor]}
                onPress={() =>
                  navigation.navigate(SCREEN_ROUTE.CHOOSE_KEY, {
                    mode: "PlayerWithPlayer",
                  })
                }
              >
                <CusText style={styles.textColor}>Player vs Player</CusText>
              </CustomButton>

              <CustomButton
                style={styles.boxShadow}
                onPress={() =>
                  navigation.navigate(SCREEN_ROUTE.CHOOSE_KEY, {
                    mode: "PlayerWithComputer",
                  })
                }
              >
                <CusText>Player vs Computer</CusText>
              </CustomButton>
            </BtnView>
          </>
        )}
      </StyledView>
    </CustomSafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 230,
  },
  progressView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxShadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  },
  backgroundColor: {
    backgroundColor: "#3171F9",
  },
  textColor: {
    color: "white",
  },
  styledText: {
    fontSize: 50,
    fontWeight: 700,
    height: 90,
  },
});
