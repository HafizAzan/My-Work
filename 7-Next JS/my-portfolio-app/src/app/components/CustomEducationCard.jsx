"use client";

import React, { memo, useEffect } from "react";

const CustomEducationCard = ({
  inter,
  classNameTitle,
  title = "",
  children,
  data,
  id,
  cId,
}) => {
  useEffect(() => {
    const card = document.querySelector(".shadow-education");
    card.addEventListener("animationend", () => {
      card.classList.add("hover-effect-enabled");
    });
  }, []);
  return (
    <div className={`${inter}`} id={id}>
      <div
        data-aos={data}
        id={cId}
        data-aos-duration="800"
        style={{ transition: "all ease 0.5s" }}
        className={` bg-custom-black text-white w-[35vw] h-[16vw] flex flex-col rounded-[1vw] border-sky-400 border-[2px] shadow-education ${classNameTitle}`}
      >
        <h1 className="text-white font-bold text-[2vw] mt-4 ml-7">{title}</h1>
        <p className="break-words text-[0.9vw] px-8 flex justify-end items-end ">
          {children}
        </p>
      </div>
    </div>
  );
};

export default memo(CustomEducationCard);
