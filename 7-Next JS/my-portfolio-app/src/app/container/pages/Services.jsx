"use client";

import CustomCard from "components/CustomCard";
import { CustomHeading } from "components/CustomHeading";
import React from "react";
import CustomUseGsap from "src/app/Hook/CustomUseGsap";

const Services = () => {
  const { bottomAnimation, topAnimationRef } = CustomUseGsap();
  return (
    <>
      <section
        id="service"
        className="bg-custom-light-black w-full h-auto pb-[12vw] text-white"
      >
        <div className="container">
          <CustomHeading ref={topAnimationRef}>My Services</CustomHeading>
          <div
            ref={bottomAnimation}
            className="service-d flex flex-wrap justify-center gap-[3vw] mt-12"
          >
            <CustomCard title="Frontend Developer">
              As a Frontend Developer, I specialize in creating responsive and
              dynamic web applications using HTML, CSS, and JavaScript. I excel
              in React.js, building interactive and user-friendly interfaces. My
              focus is on writing clean, efficient code and staying updated with
              the latest web technologies.
            </CustomCard>
            <CustomCard title="Mobile App Developer">
              I'm skilled in React Native, enabling me to create
              high-performance mobile apps with a seamless user experience. My
              expertise lies in translating complex designs into smooth,
              responsive interfaces. I'm committed to continuous learning and
              applying the latest advancements in mobile development.
            </CustomCard>
            <CustomCard title="Backend Developer">
              I specialize in backend development using NestJS, where I build
              scalable and efficient APIs. With MongoDB, I design robust,
              flexible databases to manage and retrieve data effectively. My
              expertise ensures seamless integration between the server and
              database, delivering high-performance applications.
            </CustomCard>
            <CustomCard title="Animated Applications">
              I create dynamic, animated applications using Three.js, React
              Three Fiber, and GSAP to deliver immersive user experiences. My
              expertise in these tools allows me to bring 3D elements to life
              with smooth, engaging animations. I combine Motion for precise
              control, ensuring visually stunning and interactive interfaces.
            </CustomCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
