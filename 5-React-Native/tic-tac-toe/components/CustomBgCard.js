import React from "react";
import { CustomImageBg } from "../styles/style-service";

const CustomBgCard = ({ children }) => {
  return (
    <CustomImageBg
      source={{
        uri: "https://plus.unsplash.com/premium_photo-1673735396428-d51dc2a7a62d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGljJTIwdGFjJTIwdG9lfGVufDB8fDB8fHww",
      }}
      resizeMode="cover"
    >
      {children}
    </CustomImageBg>
  );
};

export default CustomBgCard;
