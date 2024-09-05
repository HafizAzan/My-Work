import React from "react";
import {
  LinkedinFilled,
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
} from "@ant-design/icons";
import Typed from "typed.js";
import { CustomParagraphText, CustomText } from "../../components/customText";
import { imageFile } from "../../imageConstant/ImageFile";
import CustomButton from "../../components/CustomButton";

function Home() {
  const el = React.useRef();
  const emailAddress = "azan09068@gmail.com";
  const subject = encodeURIComponent("Subject of the Email");
  const body = encodeURIComponent("Body of the email");

  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Web Developer",
        "Web Designer",
        "Mobile App Developer",
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
      <div
        id="home"
        className="bg-custom-black h-[90vh] w-full text-white flex justify-around gap-[5vw] items-center"
      >
        <div className="left w-[45vw] ml-[4vw] h-[32vw]">
          <CustomText
            className="flex items-center text-white font-bold text-[3.5vw]"
            Title={
              <p>
                Hi,Its{""}
                <span className="animateTry span text-sky-500 ml-[7px]">
                  Azan
                </span>
              </p>
            }
          />
          <CustomParagraphText
            className="text-white font-medium text-[2vw]"
            Title={
              <p>
                I'm a <span className="text-sky-400" ref={el}></span>
              </p>
            }
          />
          <CustomParagraphText
            className="text-white font-sans font-medium text-[1.1vw] capitalize mt-4"
            Title={
              <p>
                As a Frontend Developer with 1 year of experience, I specialize
                in building responsive web applications using React.js and React
                Native. I am passionate about clean code, modern web practices,
                and delivering visually appealing, user friendly interfaces.
              </p>
            }
          />
          <div className="flex flex-row gap-4 mt-5">
            <a
              className="border-work"
              href="www.linkedin.com/in/hafiz-azan-8145042aa"
              target="_blank"
            >
              <LinkedinFilled className="text-[20px] " />
            </a>
            <a
              className="border-work"
              href="https://github.com/HafizAzan/MY-WORK"
              target="_blank"
            >
              <GithubFilled className="text-[20px] " />
            </a>
            <a
              className="border-work"
              href="https://www.facebook.com/Azzujimmy"
              target="_blank"
            >
              <FacebookFilled className="text-[20px] " />
            </a>
            <a
              className="border-work"
              href="https://www.instagram.com/azzujimmy.786/"
              target="_blank"
            >
              <InstagramFilled className="text-[20px] " />
            </a>
          </div>

          <div className="flex flex-row gap-4 mt-6">
            <CustomButton
              className="bg-sky-400 text-black w-[6vw] radius font-semibold btn-shadow"
              type="none"
              label={"Hire"}
              href={mailtoLink}
            />
            <CustomButton
              className="bg-transparent text-white w-[7vw] radius font-semibold btn-hover"
              type="none"
              label={"Contact"}
            />
          </div>
        </div>
        <div className="right w-[33vw] h-[32vw] flex justify-center">
          <div className="flex justify-center w-[27vw] h-[27vw] cursor-pointer bg-sky-500 img-radius items-center">
            <img src={imageFile?.mePic} className=" w-[80%] h-[80%]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
