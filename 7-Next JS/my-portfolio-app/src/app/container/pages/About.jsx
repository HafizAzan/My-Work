import { CustomHeading } from "components/CustomHeading";
import React from "react";
import CustomUseGsap from "src/app/Hook/CustomUseGsap";

const About = () => {
  const { text, topAnimationRef } = CustomUseGsap();
  return (
    <div id="about" className="bg-custom-black w-full h-auto pb-10 text-white">
      <div className="container">
        <CustomHeading ref={topAnimationRef}>About Me</CustomHeading>
        <p
          ref={text}
          className="break-words leading-[34px] font-medium text-[1.1vw] capitalize w-[78vw] text-center mx-auto mt-5"
          data-aos="fade-right"
        >
          I am Hafiz Azan, a dedicated frontend developer with a solid
          foundation in HTML, CSS, and JavaScript, along with expertise in OOP,
          React JS, and React Native. My one year of professional experience has
          allowed me to develop robust applications using React JS and React
          Native, and I have also crafted APIs with Nest JS. My commitment to
          creating seamless and engaging user experiences has been a driving
          force in my career. I am enthusiastic about the opportunity to bring
          my skills and passion to your team. Currently, I am seeking a frontend
          developer role where I can contribute to impactful projects and grow
          further in my career. I am fluent in both English and Urdu, which
          enhances my ability to communicate effectively. I am enthusiastic
          about the opportunity to bring my skills and passion to your team and
          am currently seeking a frontend developer role where I can contribute
          to impactful projects and continue to grow in my career.
        </p>
      </div>
    </div>
  );
};

export default About;
