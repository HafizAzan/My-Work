import React from "react";
import { CustomText } from "../../components/customText";
import CustomForm from "../../components/CustomForm";
import { useForm } from "react-hook-form";
import axios from "axios";
import { message } from "antd";

function Contact() {
  const [messageApi, contextHolder] = message.useMessage();
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
      console.log(res.data);
    } catch (err) {
      messageApi.open({
        type: "error",
        content: "Failed to send message. Please try again.",
      });
      console.log(err);
    }
  };
  return (
    <div
      id="contact"
      className="bg-custom-light-black pt-[10vh] w-full h-[100vh]"
    >
      {contextHolder}
      <div className="flex justify-center">
        <CustomText
          Title={
            <p>
              Contact
              <span className=" text-sky-500 ml-[7px]"> Me</span>
            </p>
          }
          className="text-white font-semibold text-[5vw] mb-7 capitalize"
        />
      </div>
      <div
        id="contactForm"
        className="form w-full  flex justify-center items-center"
      >
        <CustomForm
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
