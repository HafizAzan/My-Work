import React, { lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function Main() {
  return (
    <>
      <Home />
      <Education />
      <Skills />
      <Services />
      <About />
      <Contact />
    </>
  );
}

export default Main;
