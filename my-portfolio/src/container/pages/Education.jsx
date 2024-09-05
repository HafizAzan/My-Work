import React from "react";
import { CustomText } from "../../components/customText";
import CustomBall from "../../components/CustomBall";
import useGsap from "../../Hook/useGsap";
import CustomEducationCard from "../../components/CustomEducationCard";

function Education() {
  const { firstEducationCard, educationCard, secEducationCard } = useGsap();
  return (
    <div
      id="education"
      className="bg-custom-light-black h-[200vh] pt-[10vh] w-full text-white"
    >
      <div className="flex justify-center">
        <CustomText
          Title={"Education"}
          className="text-white font-semibold text-[5vw] mb-10 capitalize"
        />
      </div>
      <div className="h-[100vh] relative flex justify-center gap-10">
        <CustomBall
          className={`gol `}
          mainClass={`absolute left-[48.6vw] flex gap-3 items-center`}
          number={"2020 - 2022"}
        />
        <CustomEducationCard
          className="eduction border-sky-400 border-[2px] w-[35vw] h-[15vw] rounded-[30px] absolute left-[12vw] top-[4vw]"
          headingClass={"text-white font-bold text-[2vw] text-right mt-5 mr-9"}
          pClass={
            "text-white font-medium text-[0.9vw] px-8 flex justify-end items-end text-right"
          }
          title={"Matriculation"}
          p={
            <p>
              I have completed my matriculation with a focus on Computer
              Science, which laid the foundation for my technical skills and
              passion for technology. This early education ignited my interest
              in programming and software development, setting the stage for my
              journey in frontend development. My background in Computer Science
              continues to inform my approach to problem-solving and application
              design.
            </p>
          }
          ref={firstEducationCard}
        />
        <CustomBall
          className={`gol `}
          mainClass={`absolute left-[48.6vw] top-[55vw] flex gap-3 items-center`}
          number={"2023 - 2024"}
        />
        <CustomEducationCard
          className="eduction border-sky-400 border-[2px] w-[35vw] h-[15vw] rounded-[30px] absolute top-[59vw] left-[12vw]"
          headingClass={"text-white font-bold text-[2vw] text-right mt-5 mr-9"}
          pClass={
            "text-white font-medium text-[0.9vw] px-8 flex justify-end items-end text-right"
          }
          title={"Internship"}
          p={
            <p>
              During my internship, I worked as a frontend developer, where I
              learned the practical application of React JS and modern web
              technologies.I designed dynamic user interfaces, making extensive
              use of CSS, JavaScript, and React libraries.This internship
              provided me with experience in developing real-world applications,
              where I honed my skills in creating user-friendly and responsive
              designs.
            </p>
          }
          ref={educationCard}
        />
        <hr className="border-r-[2px] border-white rotate-[90deg] w-[80vw] absolute top-[38vw] left-[9.7vw]" />
        <CustomBall
          className={`gol `}
          mainClass={`absolute left-[41.2vw] top-[28vw] flex flex-row-reverse  gap-3 items-center`}
          number={"2022 - 2024"}
        />
        <CustomEducationCard
          className="eduction border-sky-400 border-[2px] w-[35vw] h-[15vw] rounded-[30px] absolute top-[32vw] right-[11vw]"
          headingClass={"text-white font-bold text-[2vw] text-left mt-5 ml-12"}
          pClass={
            "text-white font-medium text-[0.9vw] px-8 pl-12 flex  justify-end items-end text-left"
          }
          title={"Inter"}
          p={
            <p>
              I completed my intermediate in Computer Science with a passion to
              explore every new concept and elevate my skills to a new level
              This journey wasn't limited to textbook knowledge; I enhanced my
              creativity and technical skills through real-world projects,
              laying a strong foundation for my future growth.
            </p>
          }
          ref={secEducationCard}
        />
      </div>
    </div>
  );
}

export default Education;
