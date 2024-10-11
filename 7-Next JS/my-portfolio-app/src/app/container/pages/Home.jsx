"use client";

import React, { useEffect, useRef } from "react";
import { imageConstant } from "utils/imageConstant";
import CustomButton from "components/CustomButton";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons";
import Typed from "typed.js";
import Image from "next/image";

function Home({ scrollToContact }) {
  const textChange = useRef(null);
  useEffect(() => {
    const typed = new Typed(textChange.current, {
      strings: [
        "Web Developer",
        "Frontend Developer",
        "Mobile App Developer",
        "Backend Developer",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section id="home" className="bg-custom-black w-full h-[40vw] text-white">
        <div className="container flex justify-between items-center">
          <div className="left animate__animated animate__backInLeft w-[38vw] h-[77vh] flex flex-col justify-center ">
            <h1 className="text-[3.5vw] font-bold">
              Hi ,Its <span className="text-sky-500">Azan</span>
            </h1>
            <p className="p-one text-[2vw] font-normal">
              I'm a <span className="text-sky-400" ref={textChange}></span>
            </p>
            <p className="font break-words text-[1.1vw] mt-3 mb-5 capitalize">
              As a Frontend Developer with 1 year of experience, I specialize in
              building responsive web applications using React.js and React
              Native. I am passionate about clean code, modern web practices,
              and delivering visually appealing, user friendly interfaces.
            </p>
            <div className="m-icon w-full flex gap-3">
              <a
                href="www.linkedin.com/in/hafiz-azan-8145042aa"
                target="_blank"
                className="icon"
              >
                <LinkedinFilled className=" text-[1.5vw] cursor-none " />
              </a>
              <a
                href="https://github.com/HafizAzan/MY-WORK"
                target="_blank"
                className="icon"
              >
                <GithubFilled className=" text-[1.5vw] cursor-none " />
              </a>
              <a
                href="https://www.facebook.com/Azzujimmy"
                target="_blank"
                className="icon"
              >
                <FacebookFilled className=" text-[1.5vw] cursor-none " />
              </a>
              <a
                href="https://www.instagram.com/azzujimmy.786/"
                target="_blank"
                className="icon"
              >
                <InstagramFilled className=" text-[1.5vw] cursor-none " />
              </a>
            </div>
            <div className="btn-group flex gap-4 mt-8">
              <CustomButton
                btnName="Hire Me"
                className="w-[7vw] text-black font-medium bg-sky-400 btn rounded-[60px] cursor-none"
                type="none"
                onClick={scrollToContact}
              />
              <a href="public/azan.pdf" download="azan.pdf">
                <CustomButton
                  btnName="Resume"
                  className="w-[7vw] cursor-none text-white border-white border-[1px] font-medium hover:bg-sky-400 rounded-[60px]"
                  type="none"
                />
              </a>
            </div>
          </div>
          <div className="right w-[35vw] h-[77vh] flex justify-end items-center">
            <div className="one animate__animated animate__fadeInRight shadow w-[25vw] bg-sky-500 h-[25vw] rounded-[50%] flex justify-center items-center">
              <Image src={imageConstant.mePic} alt="hafiz azan" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
