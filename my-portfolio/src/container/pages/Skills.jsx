import React from "react";
import { CustomText } from "../../components/customText";
import CustomSkillCard from "../../components/CustomSkillCard";

function Skills() {
  return (
    <div
      id="skills"
      className="bg-custom-black pt-[10vh] px-[4vw]  h-[130vh] w-full text-white"
    >
      <div className="flex justify-center">
        <CustomText
          Title={"skills"}
          className="text-white font-semibold text-[5vw] mb-6 capitalize"
        />
      </div>
      <div className="flex justify-around gap-[3vw]">
        <div className="flex flex-col gap-[2.4vw]">
          <CustomSkillCard percent="99" />
          <CustomSkillCard
            percent="80"
            number="2"
            Title=" Responsive"
            TitleClass="w-[17vw]"
          />
          <CustomSkillCard percent="80" number="3" Title="JavaScript" />
          <CustomSkillCard percent="70" number="4" Title="OOP" />
          <CustomSkillCard percent="95" number="5" Title="React JS" />
          <CustomSkillCard percent="90" number="6" Title="React Native" />
          <CustomSkillCard percent="91" number="7" Title="Github" />
          <CustomSkillCard percent="65" number="8" Title="Nest JS" />
          <CustomSkillCard percent="40" number="9" Title="Mongo DB" />
          <CustomSkillCard percent="50" number="9" Title="Firebase" />
          <CustomSkillCard percent="90" number="10" Title="Ant Design" />
        </div>
        <div className="flex flex-col gap-[2.4vw]">
          <CustomSkillCard
            percent="50"
            number="11"
            Title="MUI"
            TitleClass="w-[17vw]"
          />
          <CustomSkillCard
            percent="70"
            number="12"
            Title="React Native Paper"
            TitleClass="w-[17vw]"
          />
          <CustomSkillCard
            percent="60"
            number="13"
            Title="Redux"
            TitleClass="w-[17vw]"
          />
          <CustomSkillCard percent="65" number="14" Title="Redux Toolkit" />
          <CustomSkillCard percent="55" number="14" Title="Redux Thunk" />
          <CustomSkillCard percent="75" number="14" Title="Zustand" />
          <CustomSkillCard percent="65" number="15" Title="GSAP" />
          <CustomSkillCard percent="40" number="16" Title="Three JS" />
          <CustomSkillCard percent="40" number="16" Title="Tailwind CSS" />
          <CustomSkillCard percent="40" number="16" Title="Bootstrap" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
