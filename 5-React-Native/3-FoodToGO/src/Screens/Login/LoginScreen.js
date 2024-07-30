import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import {
  AccountContainer,
  AccountCover,
  AccountScreenStyle,
  AuthBtn,
  AuthInput,
  CenterAlignContainer,
  CommonPasswordProps,
  ErrorContainer,
  Title,
} from "../AccountScreen/AllScreen.style";
import { Button, TextInput } from "react-native-paper";
import { MobileScreen } from "../../../App";
import TextComponent from "../../components/TextComponent/TextComponent";

export default function LoginScreen({ navigation }) {
  const [getValue, setValue] = useState({
    email: "",
    password: "",
  });

  let isError = true;

  return (
    <AccountScreenStyle>
      <AccountCover />
      <CenterAlignContainer>
        <AccountContainer>
          <Title>LOGIN</Title>
          <AuthInput
            label="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            value={getValue.email}
            onChangeText={(email) => setValue({ ...getValue, email })}
          />

          <AuthInput
            label="Password"
            {...CommonPasswordProps}
            value={getValue.password}
            onChangeText={(password) => setValue({ ...getValue, password })}
          />
          {isError && (
            <ErrorContainer>
              <TextComponent variant="error">
                Password is Not Matched
              </TextComponent>
            </ErrorContainer>
          )}

          <AuthBtn
            icon="lock-open-outline"
            mode="contained"
            onPress={() => console.log("clicked")}
          >
            Submit
          </AuthBtn>

          <AuthBtn
            mode="contained"
            onPress={() => navigation.navigate(MobileScreen.ACCOUNT_SCREEN)}
          >
            Back
          </AuthBtn>
        </AccountContainer>
      </CenterAlignContainer>
    </AccountScreenStyle>
  );
}

const styles = StyleSheet.create({
  inputFields: {
    marginBottom: "20px",
  },
});
