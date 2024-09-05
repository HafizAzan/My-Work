import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function useGsap() {
  const containerRef = useRef(null);
  const educationCard = useRef(null);
  const firstEducationCard = useRef(null);
  const secEducationCard = useRef(null);
  const bottomAnimation = useRef(null);

  useEffect(() => {
    gsap.from(educationCard.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: educationCard.current,
        start: "left 80%",
        end: "left 20%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(firstEducationCard.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: firstEducationCard.current,
        start: "left 80%",
        end: "left 20%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(secEducationCard.current, {
      x: 100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: secEducationCard.current,
        start: "right 80%",
        end: "right 20%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(bottomAnimation.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power1.in",
      scrollTrigger: {
        trigger: bottomAnimation.current,
        start: "bottom 100%",
        end: "bottom 10%",
        toggleActions: "play none none reserve",
      },
    });

    gsap.from(containerRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "left 80%",
        end: "left 20%",
        toggleActions: "play none play reserve",
      },
    });
  }, []);
  return {
    containerRef,
    educationCard,
    firstEducationCard,
    secEducationCard,
    bottomAnimation,
  };
}

export default useGsap;
