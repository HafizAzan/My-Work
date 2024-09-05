import React, { memo } from "react";
import { Progress } from "antd";
import useGsap from "../Hook/useGsap";

const CustomSkillCard = ({
  Title = " HTML & CSS",
  percent = 50,
  TitleClass = "",
}) => {
  const { containerRef } = useGsap();

  return (
    <div ref={containerRef} className="flex w-[35vw]">
      <div className={` ${TitleClass ? TitleClass : "w-[17vw]"} `}>{Title}</div>
      <Progress percent={percent} trailColor="#f0f0f0" showInfo={null} />
    </div>
  );
};

export default memo(CustomSkillCard);
