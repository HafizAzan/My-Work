"use client";
import { Button } from "antd";
import React, { forwardRef, memo } from "react";

const CustomButton = ({ className = "", btnName = "", ...props }) => {
  return (
    <Button className={className} {...props}>
      {btnName}
    </Button>
  );
};

export default memo(CustomButton);
