import React from "react";
import {
  AccountContainer,
  AccountCover,
  AccountScreenStyle,
  AuthBtn,
  CenterAlignContainer,
  Title,
} from "./AllScreen.style";
import { MobileScreen } from "../../RoutesScreen/RoutesScreen";

export default function AccountScreen({ navigation }) {
  return (
    <AccountScreenStyle>
      <AccountCover />
      <CenterAlignContainer>
        <AccountContainer>
          <Title>Account Screen</Title>
          <AuthBtn
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate(MobileScreen.LOGIN_SCREEN)}
          >
            Login
          </AuthBtn>

          <AuthBtn
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate(MobileScreen.REGITER_SCREEN)}
          >
            Register
          </AuthBtn>
        </AccountContainer>
      </CenterAlignContainer>
    </AccountScreenStyle>
  );
}
