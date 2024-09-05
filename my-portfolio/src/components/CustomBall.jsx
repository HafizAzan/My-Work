import React from "react";

function CustomBall({ mainClass, className, number }) {
  return (
    <div className={mainClass}>
      <div className={className}></div>
      <div>{number}</div>
    </div>
  );
}

export default CustomBall;
