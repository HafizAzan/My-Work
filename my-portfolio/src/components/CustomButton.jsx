import { Button } from "antd";
import React, { memo } from "react";

function CustomButton({
  className = "",
  label = "Hire Me",
  disabled,
  href,
  ...props
}) {
  return (
    <a href={href}>
      <Button className={className} disabled={disabled} {...props}>
        {label}
      </Button>
    </a>
  );
}

export default memo(CustomButton);
