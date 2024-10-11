"use client";

import React, { memo } from "react";
import { Controller } from "react-hook-form";
import CustomButton from "./CustomButton";

const CustomForm = ({ onSubmit, handleSubmit, control, watch, state }) => {
  const watchUsername = watch("username");
  const watchEmail = watch("email");
  const watchNumber = watch("number");
  const watchMessage = watch("message");
  const isValid = watchUsername && watchEmail && watchNumber && watchMessage;
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[40vw] h-[30vw] flex flex-col justify-center items-center"
      >
        <Controller
          name="username"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Your Name"
              className="outline-none w-[33vw] mb-4 text-white border-sky-500 border-[2px] bg-transparent rounded-[5px] py-[10px] pl-[10px] placeholder:text-[0.9vw]"
              onChange={(e) => field.onChange(e)}
              required
            />
          )}
        />
        <Controller
          name="email"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="Your Email"
              className="outline-none w-[33vw] mb-4 text-white border-sky-500 border-[2px] bg-transparent rounded-[5px] py-[10px] pl-[10px] placeholder:text-[0.9vw]"
              onChange={(e) => field.onChange(e)}
              required
            />
          )}
        />
        <Controller
          name="number"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              placeholder="Your Number"
              className="outline-none w-[33vw] mb-4 text-white border-sky-500 border-[2px] bg-transparent rounded-[5px] py-[10px] pl-[10px] placeholder:text-[0.9vw]"
              onChange={(e) => field.onChange(e)}
              required
            />
          )}
        />
        <Controller
          name="message"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              type="text"
              col={50}
              placeholder="Type Message"
              className="outline-none w-[33vw] h-[36vw] mb-4 text-white border-sky-500 border-[2px] bg-transparent rounded-[5px] py-[10px] pl-[10px] placeholder:text-[0.9vw]"
              onChange={(e) => field.onChange(e)}
              required
            />
          )}
        />
        <CustomButton
          className={`transition-custom-transition pt-5 pb-5 text-white w-[33vw] rounded-[5px] border-sky-500 border-[2px] font-semibold text-[1.2vw] ${
            !isValid && "custom-disabled-button"
          }`}
          type="none"
          htmlType="submit"
          disabled={!isValid || state}
          btnName={state ? "Submitting..." : "Submit"}
          loading={state}
        />
      </form>
    </>
  );
};

export default memo(CustomForm);
