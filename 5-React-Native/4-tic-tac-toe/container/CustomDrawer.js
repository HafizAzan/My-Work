import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import { Button } from "react-native-paper";

const CustomDrawer = ({
  handleResetButton,
  drawerVisible,
  setDrawerVisible,
  volumeMuted,
  setVolumeMuted,
  goBack,
}) => {
  const resetGameHandler = () => {
    handleResetButton();
  };

  const backHandler = () => {
    goBack();
  };

  const muteVolumeHandler = () => {
    setVolumeMuted(!volumeMuted);
    console.log(volumeMuted ? "Volume Unmuted" : "Volume Muted");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setDrawerVisible(true)}>
        <Image
          source={require("../image/set.png")}
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={drawerVisible}
        onTouchCancel={() => setDrawerVisible(false)}
        onRequestClose={() => setDrawerVisible(false)}
      >
        <View style={styles.drawerContainer}>
          <View style={styles.drawerContent}>
            <Text style={styles.drawerTitle}>Setting</Text>

            <Button
              mode="contained"
              onPress={backHandler}
              style={styles.drawerButton}
            >
              Go To Home
            </Button>

            <Button
              mode="contained"
              onPress={resetGameHandler}
              style={styles.drawerButton}
            >
              Reset Game
            </Button>

            <Button
              mode="contained"
              onPress={() => setDrawerVisible(false)}
              style={styles.drawerButton}
            >
              Close Setting
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  openDrawerButton: {
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  drawerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    marginBottom: "20px",
  },
  drawerContent: {
    width: "100%",
    height: "45%",
    backgroundColor: "white",
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: "20px",
  },
  drawerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  drawerButton: {
    marginVertical: 10,
  },
});

export default CustomDrawer;
