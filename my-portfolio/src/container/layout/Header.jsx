import React, { memo, useEffect, useState } from "react";
import { CustomText } from "../../components/customText";
import { Link } from "react-scroll";

function Header() {
  const [activeClass, setActiveClass] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.getElementById("header");
      const homeElement = document.getElementById("home");

      if (window.scrollY < (homeElement?.offsetHeight || 0)) {
        setActiveClass("home");
      } else {
        setActiveClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="header"
      className="bg-black w-full h-[6vmax] sticky top-0 z-[999] text-white flex items-center justify-around gap-[14.5rem]"
    >
      <CustomText
        className="text-just h-full flex items-center text-white font-bold text-[2.5vw] cursor-pointer w-[13vw]"
        Title={
          <p>
            Hafiz <span className="span text-sky-500 ">Azan</span>
          </p>
        }
      />
      <nav className="w-[42vw] flex gap-10">
        <li className="cursor-pointer">
          <Link
            className={`font-semibold text-[17px] ${
              activeClass === "home" ? "active" : ""
            }`}
            to={"home"}
            smooth={true}
            duration={1200}
            activeClass="active"
            spy={true}
            onSetActive={() => setActiveClass("")}
          >
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="font-semibold text-[17px]"
            to="education"
            smooth={true}
            duration={1200}
            activeClass="active"
            spy={true}
          >
            Education
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="font-semibold text-[17px]"
            to="skills"
            smooth={true}
            duration={1200}
            activeClass="active"
            spy={true}
          >
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="font-semibold text-[17px]"
            to="service"
            smooth={true}
            duration={1200}
            activeClass="active"
            spy={true}
          >
            Services
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="font-semibold text-[17px]"
            to="about"
            smooth={true}
            duration={1200}
            activeClass="active"
            spy={true}
          >
            About
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="font-semibold text-[17px]"
            to="contact"
            smooth={true}
            duration={1200}
            activeClass="active"
            spy={true}
          >
            Contact
          </Link>
        </li>
      </nav>
    </header>
  );
}

export default memo(Header);
