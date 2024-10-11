"use client"; // Next.js directive for client-side rendering

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CustomUseGsap() {
  const bottomAnimationRef = useRef(null);
  const contactRef = useRef(null);
  const topAnimationRef = useRef(null);
  const rightAnimationRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Bottom Animation
      const element = bottomAnimationRef.current;

      if (element) {
        gsap.fromTo(
          element,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }

    if (typeof window !== "undefined") {
      // Contact Form Animation
      const contact = contactRef.current;

      if (contact) {
        gsap.fromTo(
          contact,
          {
            x: -500,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contact,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }

    if (typeof window !== "undefined") {
      const topElement = topAnimationRef.current;

      if (topElement) {
        gsap.fromTo(
          topElement,
          {
            y: -50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: topElement,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }

    if (typeof window !== "undefined") {
      const contact = rightAnimationRef.current;

      if (contact) {
        gsap.fromTo(
          contact,
          {
            x: -1000,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            delay: 1,
            scrollTrigger: {
              trigger: contact,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }
  }, []);

  return {
    bottomAnimation: bottomAnimationRef,
    contact: contactRef,
    topAnimationRef,
    rightAnimationRef,
  };
}

export default CustomUseGsap;
