import { View, Text } from "react-native";
import React, { memo } from "react";
import styled from "styled-components";

const defaultTextStyles = (theme) => `
    font-family  : ${theme.fonts.body};
    font-weight :  ${theme.fontWeights.regular};
    color : ${theme.colors.text.primary};
    flex-wrap  :wrap;
    margin-top : 0px;
    margin-bottom : 0px;
    `;

const body = (theme) => `
    font-size : ${theme.fontSizes.body}`;

const error = (theme) => `
    color : ${theme.colors.text.error}`;

const caption = (theme) => `
    font-weight : ${theme.fontWeights.bold}
    font-size : ${theme.fontSizes.caption}`;

const label = (theme) => `
    font-size : ${theme.fontSizes.body}
    font-weight : ${theme.fontWeights.medium}
    font-family : ${theme.fonts.heading}
    `;

const variants = {
  body,
  error,
  caption,
  label,
};

const TextComponent = styled(Text)`
  ${(props) => defaultTextStyles(props.theme)}
  ${(props) => variants[props.variant](props.theme)}
`;

function CustomText(props) {
  const { variant = "body", children } = props;
  return <TextComponent variant={variant}>{children}</TextComponent>;
}

export default memo(CustomText);
