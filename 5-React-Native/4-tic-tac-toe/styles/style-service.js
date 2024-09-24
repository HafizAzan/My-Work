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
  height: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  border-radius: 10px;
  padding-top: 3%;
  padding-right: 2%;
  padding-left: 2%;
  margin-top: 4%;
`;

export const Box = styled(View)`
  flex-basis: 30%;
  height: 30%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isWinning }) =>
    isWinning &&
    `
    border-width: 5px;
    border-color: green;
    background-color: skyblue;
  `}
  border: 01px solid gray;

  ${({ isThirdChild }) =>
    isThirdChild &&
    `
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
  `}

  ${({ isSixChild }) =>
    isSixChild &&
    `
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    
  `}

  ${({ isNineChild }) =>
    isNineChild &&
    `
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
  `}

  ${({ isSevenChild }) =>
    isSevenChild &&
    `
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
  `}

  ${({ isTwoChild }) =>
    isTwoChild &&
    `
    border-top-width: 0;
  `}

  ${({ isFiveChild }) =>
    isFiveChild &&
    `
    border-top-width: 0;
  `}

  ${({ isEightChild }) =>
    isEightChild &&
    `
    border-top-width: 0;
    border-bottom-width: 0;
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
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ScoreText = styled(Text)`
  font-size: 20px;
  margin-bottom: 10px;
  background-color: black;
  color: white;
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
