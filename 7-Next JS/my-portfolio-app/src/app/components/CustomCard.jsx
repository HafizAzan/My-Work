"use client";

import React from "react";

const CustomCard = ({ title = "Frontend Developer", children}) => {
  return (
    <div className="card bg-sky-300 rounded-md w-[35vw] h-[18vw] flex flex-col pt-[2vw] pl-[2vw] pr-[2vw]">
      <h1 className="text-black font-bold text-[2vw]">{title}</h1>
      <p className="text-black font-medium text-[1vw]">{children}</p>
    </div>
  );
};

export default CustomCard;
