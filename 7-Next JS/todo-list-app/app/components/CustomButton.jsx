import React, { memo } from "react";

const CustomButton = ({ className, children, ...props }) => {
  return (
    <>
      <button
        className={`${className} transition-all duration-200  text-white w-16 py-3 rounded-lg uppercase text-sm`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default memo(CustomButton);
