"use client";

import React, { memo } from "react";

const CustomBall = ({ ball, month }) => {
  return (
    <div
      className={`flex gap-3 items-center absolute left-[41vw] top-[-52px] border-none ${ball}`}
    >
      <hr className="shadow-custom-box-shadow w-[2vw] h-[2vw] bg-sky-500 rounded-[50%]" />
      <h3>{month}</h3>
    </div>
  );
};

export default memo(CustomBall);
