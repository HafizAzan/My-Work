import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";

export const CustomImageBg = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const CustomSafeAreaView = styled(SafeAreaView)`
  margin-top: 30px;
  background-color: #f3f5f4;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const StyledView = styled(View)`
  justify-content: center;
  height: 550px;
`;

export const StyledText = styled(Text)`
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  color: blue;
  background-color: rgba(255, 255, 255, 0.2);
  height: 50px;
`;
export const BtnView = styled(View)`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const WrapperCon = styled(View)`
  width: 90%;
  height: 60%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 12px;
  border-radius: 10px;
  padding-top: 3%;
  padding-right: 2%;
  padding-left: 2%;
`;

export const Box = styled(View)`
  width: 30%;
  height: 30%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  ${({ isWinning }) =>
    isWinning &&
    `
    border-width: 5px;
    border-color: green;
    background-color: skyblue;
  `}
`;

export const CustomText = styled(Text)`
  font-size: 90px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 100px;
`;

export const ScoreContainer = styled(View)`
  margin-top: 20px;
  margin-left: 5px;
  width: 100%;
`;

export const ScoreText = styled(Text)`
  font-size: 20px;
  margin-bottom: 10px;
  background-color: black;
  color: white;
  width: 45%;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const WinnerText = styled(Text)`
  margin-top: 40px;
  font-size: 40px;
  margin-bottom: 30px;
  color: white;
`;

export const CustomImg = styled(Image)`
  width: 100%;
  height: 200px;
  resize-mode: cover;
`;

export const CusText = styled(Text)`
  text-align: center;
  color: blue;
`;
