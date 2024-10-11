"use client";
import React from "react";
import { CustomHeading } from "components/CustomHeading";
import CustomEducationCard from "components/CustomEducationCard";
import CustomBall from "components/CustomBall";
import CustomUseGsap from "src/app/Hook/CustomUseGsap";

const Education = () => {
  const { topAnimationRef } = CustomUseGsap();

  return (
    <>
      <div
        id="education"
        className="bg-custom-light-black w-full h-auto pb-[13vw] text-white"
      >
        <div className="container">
          <CustomHeading ref={topAnimationRef}>Education</CustomHeading>
          <div className="education-card flex flex-col gap-[9vw] mt-16 relative">
            <CustomEducationCard data="fade-right" title="Matriculation">
              I have completed my matriculation with a focus on Computer
              Science, which laid the foundation for my technical skills and
              passion for technology. This early education ignited my interest
              in programming and software development, setting the stage for my
              journey in frontend development. My background in Computer Science
              continues to inform my approach to problem-solving and application
              design.
            </CustomEducationCard>
            <CustomBall month="2020-2022" ball="c-ball" />
            <CustomEducationCard
              data="fade-left"
              classNameTitle="!h-[12.70vw]"
              title="Inter"
              inter="self-end !important"
              id="educations"
              cId="education"
            >
              I completed my intermediate in Computer Science with a passion to
              explore every new concept and elevate my skills to a new level
              This journey wasn't limited to textbook knowledge; I enhanced my
              creativity and technical skills through real-world projects,
              laying a strong foundation for my future growth.
            </CustomEducationCard>
            <CustomBall
              month="2022-2024"
              ball="c-ball-r top-[21vw] flex-row-reverse !left-[33.5vw] "
            />
            <CustomEducationCard data="fade-up" title="Internship">
              During my internship, I worked as a frontend developer, where I
              learned the practical application of React JS and modern web
              technologies.I designed dynamic user interfaces, making extensive
              use of CSS, JavaScript, and React libraries.This internship
              provided me with experience in developing real-world applications,
              where I honed my skills in creating user-friendly and responsive
              designs.
            </CustomEducationCard>
            <CustomBall month="2024" ball="c-ball top-[46vw]" />
            <hr className="hr w-[0.1vw] h-[75vw] bg-sky-500 absolute top-[-51px] left-[42vw] border-none" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
