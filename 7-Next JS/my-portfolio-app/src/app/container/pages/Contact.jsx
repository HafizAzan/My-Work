import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { message } from "antd";
import { CustomHeading } from "components/CustomHeading";
import CustomForm from "components/CustomForm";
import CustomUseGsap from "src/app/Hook/CustomUseGsap";

function Contact({ contactRef }) {
  const { contact, topAnimationRef } = CustomUseGsap();
  const [messageApi, contextHolder] = message.useMessage();
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      number: "",
      message: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const service_id = "service_f9zns8n";
    const temp_id = "template_xmoobtr";
    const public_key = "BLuu1F1vFHA83_ptq";

    const payload = {
      service_id: service_id,
      template_id: temp_id,
      user_id: public_key,
      template_params: {
        to_name: "Hafiz Azan",
        from_name: data.username,
        from_email: data.email,
        from_number: data.number,
        message: data.message,
      },
    };
    setSubmitting(true);
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        payload
      );

      reset();
      messageApi.open({
        type: "success",
        content: "Message sent successfully!",
      });
      setSubmitting(false);
    } catch (err) {
      messageApi.open({
        type: "error",
        content: "Failed to send message. Please try again.",
      });
      setSubmitting(false);
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={contactRef}
      id="contact"
      className="bg-custom-light-black w-full h-auto pb-[12vw]"
    >
      {contextHolder}
      <CustomHeading ref={topAnimationRef}>
        Get In
        <span className=" text-white ml-[7px]"> Touch</span>
      </CustomHeading>
      <div
        ref={contact}
        id="contactForm"
        className="form w-full flex justify-center items-center mt-8"
      >
        <CustomForm
          state={isSubmitting}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          control={control}
          watch={watch}
          isValid={isValid}
        />
      </div>
    </div>
  );
}

export default Contact;
