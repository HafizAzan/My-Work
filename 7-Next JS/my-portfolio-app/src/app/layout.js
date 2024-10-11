"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "container/layout/Header";
import Footer from "container/layout/Footer";
import { useEffect, useRef, useState } from "react";
import CustomLoader from "components/CustomLoader";
import { metadata } from "./metaData";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const cursorRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const handleMouseMove = (event) => {
      console.log(event);
      const { clientX, clientY } = event;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        {loading ? (
          <CustomLoader />
        ) : (
          <>
            <div ref={cursorRef} className="custom-cursor"></div>

            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
