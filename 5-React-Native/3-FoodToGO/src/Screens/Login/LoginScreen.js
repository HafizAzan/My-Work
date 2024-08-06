import { StyleSheet, Text } from "react-native";
import React, { useContext, useState } from "react";
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
import TextComponent from "../../components/TextComponent/TextComponent";
import { AuthenticationContext } from "../../ContextAPIs/Authentication/Authentication.context";
import { MobileScreen } from "../../RoutesScreen/RoutesScreen";

export default function LoginScreen({ navigation }) {
  const { loading, error, onLoginForm } = useContext(AuthenticationContext);
  const [getValue, setValue] = useState({
    email: "",
    password: "",
  });

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
          {error && (
            <ErrorContainer>
              <TextComponent variant="error">{error}</TextComponent>
            </ErrorContainer>
          )}

          <AuthBtn
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLoginForm(getValue)}
            loading={loading}
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
