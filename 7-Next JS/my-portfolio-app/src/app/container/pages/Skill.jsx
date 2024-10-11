"use client";

import React, { useEffect, useRef, useState } from "react";
import CustomSkillCard from "components/CustomSkillCard";
import { CustomHeading } from "components/CustomHeading";
import CustomUseGsap from "src/app/Hook/CustomUseGsap";
import CustomButton from "../../components/CustomButton";

const Skill = () => {
  const { topAnimationRef } = CustomUseGsap();
  const [isShow, setShow] = useState(false);
  const skillSectionRef = useRef(null);
  const prevShowRef = useRef(isShow);

  useEffect(() => {
    if (prevShowRef.current === true && isShow === false) {
      skillSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    prevShowRef.current = isShow;
  }, [isShow]);
  return (
    <section
      ref={skillSectionRef}
      id="skills"
      className="bg-custom-black w-full h-auto pb-[5vw] text-white"
    >
      <div className="container">
        <CustomHeading ref={topAnimationRef}>My Skills</CustomHeading>
        <div className="head flex justify-center flex-wrap gap-14 mt-10">
          {/* <div className="skills flex flex-col gap-4 w-[24vw]"> */}
          <CustomSkillCard percent={99}>HTML CSS</CustomSkillCard>
          <CustomSkillCard percent={85}>JavaScript</CustomSkillCard>
          <CustomSkillCard percent={80}>OOP</CustomSkillCard>
          <CustomSkillCard percent={90}>React JS</CustomSkillCard>
          <CustomSkillCard percent={60}>React Native</CustomSkillCard>
          <CustomSkillCard percent={80}>Next JS</CustomSkillCard>
          <CustomSkillCard percent={70}>Nest JS</CustomSkillCard>
          <CustomSkillCard percent={95}>Github</CustomSkillCard>
          {/* </div> */}
          {/* <div className="skills flex flex-col gap-4 w-[24vw]"> */}
          <CustomSkillCard percent={86}>Responsive CSS</CustomSkillCard>
          <CustomSkillCard percent={90}>Tailwind CSS</CustomSkillCard>
          <CustomSkillCard percent={90}>Bootstrap</CustomSkillCard>
          <CustomSkillCard percent={90}>Ant Design</CustomSkillCard>

          {isShow == true && (
            <>
              <CustomSkillCard percent={80}>React Native Paper</CustomSkillCard>
              <CustomSkillCard percent={70}>Material UI</CustomSkillCard>
              <CustomSkillCard percent={50}>Mongo DB</CustomSkillCard>
              <CustomSkillCard percent={50}>Firebase</CustomSkillCard>
              {/* </div> */}
              {/* <div className="skills flex flex-col gap-4 w-[24vw]"> */}
              <CustomSkillCard percent={70}>Redux</CustomSkillCard>
              <CustomSkillCard percent={72}>Redux Toolkit</CustomSkillCard>
              <CustomSkillCard percent={65}>Redux Thunk</CustomSkillCard>
              <CustomSkillCard percent={74}>Zustand</CustomSkillCard>
              <CustomSkillCard percent={60}>GSAP</CustomSkillCard>
              <CustomSkillCard percent={50}>Three JS</CustomSkillCard>
            </>
          )}
        </div>
        <div className="flex justify-center items-center pt-8">
          <CustomButton
            className=" text-white cursor-none border-white border-[1px] font-medium hover:bg-sky-400 rounded-[60px]"
            btnName={isShow ? "Show Less" : "Show More"}
            type="none"
            onClick={() => setShow(!isShow)}
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;
