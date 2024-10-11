"use client";

import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css"
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Education from "./pages/Education";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Main() {
  useEffect(() => {
    AOS.init();
  }, []);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <>
      <Home scrollToContact={scrollToContact} />
      <Education />
      <Skill />
      <Services />
      <About />
      <Contact contactRef={contactRef} />
    </>
  );
}

export default Main;
