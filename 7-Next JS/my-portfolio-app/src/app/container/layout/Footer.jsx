import React, { memo } from "react";
import {
  LinkedinFilled,
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
} from "@ant-design/icons";

function Footer() {
  return (
    <footer className="h-[20vh] bg-custom-black flex justify-center flex-col items-center gap-5">
      <div className="flex flex-row gap-4">
        <a
          href="www.linkedin.com/in/hafiz-azan-8145042aa"
          target="_blank"
          className="border-work icon"
        >
          <LinkedinFilled className="text-[20px] " />
        </a>
        <a
          className="border-work icon"
          href="https://github.com/HafizAzan/MY-WORK"
          target="_blank"
        >
          <GithubFilled className="text-[20px] " />
        </a>
        <a className="border-work icon">
          <FacebookFilled
            className="text-[20px]"
            href="https://www.facebook.com/Azzujimmy"
            target="_blank"
          />
        </a>
        <a
          className="border-work icon"
          href="https://www.instagram.com/azzujimmy.786/"
          target="_blank"
        >
          <InstagramFilled className="text-[20px] " />
        </a>
      </div>
      <div className="text-sky-400 text-[15px]">
        &copy; <span>Hafiz Azan | All Right Reserved</span>
      </div>
    </footer>
  );
}

export default memo(Footer);
