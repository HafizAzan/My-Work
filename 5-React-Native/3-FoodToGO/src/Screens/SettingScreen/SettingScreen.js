import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components";
import TextComponent from "../../components/TextComponent/TextComponent";
import { useAuthenticationContext } from "../../ContextAPIs/Authentication/Authentication.context";

const SettingContainer = styled(View)`
  margin-top: 20px;
`;

const ListContainer = styled(View)`
  border-bottom: 1px solid grey;
  background-color: white;
  padding: 20px 40px;
`;

export default function SettingScreen() {
  const { user, onLogoutForm } = useAuthenticationContext();
  return (
    <SettingContainer>
      <ListContainer>
        <TextComponent>User Profile</TextComponent>
      </ListContainer>
      <ListContainer>
        <TextComponent>User Email : {user?.user?.email} </TextComponent>
      </ListContainer>
      <ListContainer>
        <TouchableOpacity onPress={onLogoutForm}>
          <TextComponent>Logout</TextComponent>
        </TouchableOpacity>
      </ListContainer>
    </SettingContainer>
  );
}
