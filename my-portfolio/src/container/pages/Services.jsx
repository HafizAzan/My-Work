import React from "react";
import { CustomText } from "../../components/customText";
import CustomCard from "../../components/CustomCard";
import useGsap from "../../Hook/useGsap";

function Services() {
  const { bottomAnimation } = useGsap();
  return (
    <div
      id="service"
      className="bg-custom-light-black h-[120vh] pt-[10vh] w-full text-white"
    >
      <div className="flex justify-center">
        <CustomText
          Title={"services"}
          className="text-white font-semibold text-[5vw] mb-6 capitalize"
        />
      </div>
      <div
        ref={bottomAnimation}
        className="flex flex-wrap justify-center gap-[3vw]"
      >
        <CustomCard
          title="Frontend Developer"
          bio={
            <p>
              As a Frontend Developer, I specialize in creating responsive and
              dynamic web applications using HTML, CSS, and JavaScript. I excel
              in React.js, building interactive and user-friendly interfaces. My
              focus is on writing clean, efficient code and staying updated with
              the latest web technologies.
            </p>
          }
        />
        <CustomCard
          title="Mobile App Developer"
          bio={
            <p>
              I'm skilled in React Native, enabling me to create
              high-performance mobile apps with a seamless user experience. My
              expertise lies in translating complex designs into smooth,
              responsive interfaces. I'm committed to continuous learning and
              applying the latest advancements in mobile development.
            </p>
          }
        />
        <CustomCard
          title="Backend Developer"
          bio={
            <p>
              I specialize in backend development using NestJS, where I build
              scalable and efficient APIs. With MongoDB, I design robust,
              flexible databases to manage and retrieve data effectively. My
              expertise ensures seamless integration between the server and
              database, delivering high-performance applications.
            </p>
          }
        />
        <CustomCard
          title="Animated Applications "
          bio={
            <p>
              I create dynamic, animated applications using Three.js, React
              Three Fiber, and GSAP to deliver immersive user experiences. My
              expertise in these tools allows me to bring 3D elements to life
              with smooth, engaging animations. I combine Motion for precise
              control, ensuring visually stunning and interactive interfaces.
            </p>
          }
        />
      </div>
    </div>
  );
}

export default Services;
