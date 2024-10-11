"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

function Header() {
  const [activeClass, setActiveClass] = useState("home");
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "education",
        "skills",
        "service",
        "about",
        "contact",
      ];
      let foundSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          foundSection = section;
        }
      });

      setActiveClass(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className="sticky top-0 z-[100] bg-black w-full h-[90px] text-white flex items-center justify-between"
    >
      <div className="container flex items-center justify-between">
        <div className="animate__animated animate__backInDown  w-[17vw]">
          <h1 className="transitionName ClassScale capitalize text-[2.8vw] font-semibold">
            hafiz <span className="text-sky-500 text-shadow">azan</span>
          </h1>
        </div>
        <nav
          id="nav"
          className="animate__animated animate__backInLeft flex gap-8 "
        >
          <li className="">
            <Link
              to="home"
              smooth={true}
              duration={1000}
              spy={true}
              className={`text-[1.2vw] font-normal border-b-[1px] border-b-transparent transition-custom duration-custom ease-custom ${
                activeClass === "home" ? "home" : ""
              }`}
              onSetActive={() => setActiveClass("home")}
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              to="education"
              smooth={true}
              duration={1000}
              spy={true}
              className={` text-[1.2vw] font-normal border-b-[1px] border-b-transparent transition-custom duration-custom ease-custom ${
                activeClass === "education" ? "education" : ""
              }`}
              onSetActive={() => setActiveClass("education")}
            >
              Education
            </Link>
          </li>
          <li className="">
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              spy={true}
              className={` text-[1.2vw] font-normal border-b-[1px] border-b-transparent transition-custom duration-custom ease-custom ${
                activeClass === "skills" ? "skill" : ""
              }`}
              onSetActive={() => setActiveClass("skills")}
            >
              Skills
            </Link>
          </li>
          <li className="">
            <Link
              to="service"
              smooth={true}
              duration={1000}
              spy={true}
              className={` text-[1.2vw] font-normal border-b-[1px] border-b-transparent transition-custom duration-custom ease-custom ${
                activeClass === "service" ? "service" : ""
              }`}
              onSetActive={() => setActiveClass("service")}
            >
              Service
            </Link>
          </li>
          <li className="">
            <Link
              to="about"
              smooth={true}
              duration={1000}
              spy={true}
              className={` text-[1.2vw] font-normal border-b-[1px] border-b-transparent transition-custom duration-custom ease-custom ${
                activeClass === "about" ? "about" : ""
              }`}
              onSetActive={() => setActiveClass("about")}
            >
              About
            </Link>
          </li>
          <li className="">
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              spy={true}
              className={` text-[1.2vw] font-normal border-b-[1px] border-b-transparent transition-custom duration-custom ease-custom ${
                activeClass === "contact" ? "contact" : ""
              }`}
              onSetActive={() => setActiveClass("contact")}
            >
              Contact
            </Link>
          </li>
        </nav>
        <nav className="nav">
          <MenuOutlined className="icon" onClick={() => setOpen(true)} />
          <Drawer
            placement="right"
            width={300}
            onClose={() => setOpen(false)}
            className="!bg-black text-white"
            open={isOpen}
          >
            <CloseOutlined
              className="close text-[30px] flex justify-end items-end mb-5"
              onClick={() => setOpen(false)}
            />
            <div id="drawer" className="flex flex-col gap-4">
              <li className="">
                <Link
                  to="home"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  className={`text-white  text-[2vw] font-medium border-b-[1px] border-b-transparent transition-custom duration-custom ease-custom ${
                    activeClass === "home" ? "home" : ""
                  }`}
                  onSetActive={() => setActiveClass("home")}
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  to="education"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  className={`text-white  text-[2vw] font-medium border-b-[1px] border-b-transparent transition-custom duration-custom ease-custom ${
                    activeClass === "education" ? "education" : ""
                  }`}
                  onSetActive={() => setActiveClass("education")}
                >
                  Education
                </Link>
              </li>
              <li className="">
                <Link
                  to="skills"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  className={`text-white  text-[2vw] font-medium border-b-[1px] border-b-transparent transition-custom duration-custom ease-custom ${
                    activeClass === "skills" ? "skill" : ""
                  }`}
                  onSetActive={() => setActiveClass("skills")}
                >
                  Skills
                </Link>
              </li>
              <li className="">
                <Link
                  to="service"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  className={`text-white  text-[2vw] font-medium border-b-[1px] border-b-transparent transition-custom duration-custom ease-custom ${
                    activeClass === "service" ? "service" : ""
                  }`}
                  onSetActive={() => setActiveClass("service")}
                >
                  Service
                </Link>
              </li>
              <li className="">
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  className={` text-[2vw] font-medium border-b-[1px] border-b-transparent transition-custom duration-custom ease-custom ${
                    activeClass === "about" ? "about" : ""
                  }`}
                  onSetActive={() => setActiveClass("about")}
                >
                  About
                </Link>
              </li>
              <li className="">
                <Link
                  to="contact"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  className={` text-[2vw] font-medium border-b-[1px] border-b-transparent transition-custom duration-custom ease-custom ${
                    activeClass === "contact" ? "contact" : ""
                  }`}
                  onSetActive={() => setActiveClass("contact")}
                >
                  Contact
                </Link>
              </li>
            </div>
          </Drawer>
        </nav>
      </div>
    </header>
  );
}

export default Header;
