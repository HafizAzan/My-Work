import React, { memo } from "react";
import { Text } from "react-native-paper";
import styled from "styled-components";

const DefaultTextStyle = (theme) => `
font-family : ${theme.fonts.body};
font-weight : ${theme.fontWeights.regular};
color : ${theme.colors.text.primary};
flex-wrap : wrap;
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

const StyledText = styled(Text)`
  ${(props) => DefaultTextStyle(props.theme)}
  ${(props) => variants[props.customVariant](props.theme)}
`;

function TextComponent(props) {
  const { variant = "body", children } = props;
  return <StyledText customVariant={variant}>{children}</StyledText>;
}

export default memo(TextComponent);
