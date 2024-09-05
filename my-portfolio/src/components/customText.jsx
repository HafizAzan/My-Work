import React from "react";

export const CustomText = ({ Title, ...props }) => {
  return <h1 {...props}>{Title}</h1>;
};

export const CustomSecondText = ({ Title, ...props }) => {
  return <h2 {...props}>{Title}</h2>;
};

export const CustomThirdText = ({ Title, ...props }) => {
  return <h3 {...props}>{Title}</h3>;
};

export const CustomFourthText = ({ Title, ...props }) => {
  return <h4 {...props}>{Title}</h4>;
};

export const CustomFiveText = ({ Title, ...props }) => {
  return <h5 {...props}>{Title}</h5>;
};

export const CustomSixText = ({ Title, ...props }) => {
  return <h6 {...props}>{Title}</h6>;
};

export const CustomParagraphText = ({ Title, ...props }) => {
  return <p {...props}>{Title}</p>;
};
