import { StyleSheet, Text } from "react-native";
import React, { useContext, useState } from "react";
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
import { AuthenticationContext } from "../../ContextAPIs/Authentication/Authentication.context";

export default function RegisterScreen({ navigation }) {
  const { loading, error, onRegiterForm } = useContext(AuthenticationContext);
  const [getValue, setValue] = useState({
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  return (
    <AccountScreenStyle>
      <AccountCover />
      <CenterAlignContainer>
        <AccountContainer>
          <Title>REGISTER</Title>
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
          <AuthInput
            label="Confirm Password"
            {...CommonPasswordProps}
            value={getValue.ConfirmPassword}
            onChangeText={(ConfirmPassword) =>
              setValue({ ...getValue, ConfirmPassword })
            }
          />
          {error && (
            <ErrorContainer>
              <TextComponent variant="error">{error}</TextComponent>
            </ErrorContainer>
          )}

          <AuthBtn
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onRegiterForm(getValue)}
            loading={loading}
          >
            Register
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
