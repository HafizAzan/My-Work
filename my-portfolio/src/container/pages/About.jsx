import React from "react";
import { CustomText } from "../../components/customText";

function About() {
  return (
    <div
      id="about"
      className="bg-custom-black h-[90vh] pt-[10vh] w-full text-white"
    >
      <div className="flex justify-center">
        <CustomText
          Title={"About"}
          className="text-white font-semibold text-[5vw] mb-6 capitalize"
        />
      </div>
      <div>
        <CustomText
          className="text-white leading-[30px] font-medium text-[1.3vw] mb-6 capitalize w-[74vw] text-center mx-auto"
          Title={
            <p>
              I am Hafiz Azan, a dedicated frontend developer with a solid
              foundation in HTML, CSS, and JavaScript, <br /> along with
              expertise in OOP, React JS, and React Native. My one year of
              professional experience <br /> has allowed me to develop robust
              applications using React JS and React Native, and I have also
              crafted <br /> APIs with Nest JS. My commitment to creating
              seamless and engaging user experiences has been <br /> a driving
              force in my career. I am enthusiastic about the opportunity to
              bring my skills and passion to your <br /> team. Currently, I am
              seeking a frontend developer role where I can contribute to
              impactful projects <br /> and grow further in my career. I am
              fluent in both English and Urdu, which enhances my ability to
              communicate effectively. I am enthusiastic about the opportunity
              to bring my skills and passion to your team and <br /> am
              currently seeking a frontend developer role where I can contribute
              to impactful projects and continue to
              <br /> grow in my career.
            </p>
          }
        />
      </div>
    </div>
  );
}

export default About;

// https://live-projects-lyart.vercel.app/
// https://hafiz-azan-code-genius.netlify.app/
// https://genius-resturant-hafiz-azan.netlify.app/
