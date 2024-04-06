/** @format */

import React from "react";
import { Button, Form, Input, Typography, message } from "antd";
import { RegisterUser } from "../services/users.register";
import { useMutation } from "react-query";
const { Title } = Typography;

function UserRegister() {
  const { mutateAsync: RegisterReqeust, isLoading: loaderRegister } = useMutation("register", (payload) => RegisterUser.Register(payload));
  const [form] = Form.useForm();
  const [messageApi, ContextHolder] = message.useMessage();
  const onFinish = (values) => {
    console.log(values);
    RegisterReqeust(values, {
      onSuccess: () => {
        messageApi.open({
          type: "success",
          content: "User is Registered succesfully!",
        });
      },
    });
    form.resetFields();
  };

  return (
    <div>
      <Title level={2}>Register Form</Title>
      {ContextHolder}
      <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}>
          <Input placeholder="Enter Your Username." />
        </Form.Item>
        <Form.Item
          name="user_firstname"
          rules={[
            {
              required: true,
              message: "Please input your user firstname!",
            },
          ]}>
          <Input placeholder="Enter Your user firstname" />
        </Form.Item>
        <Form.Item
          name="user_lastname"
          rules={[
            {
              required: true,
              message: "Please input your user lastname!",
            },
          ]}>
          <Input placeholder="Enter Your user lastname" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Plz Enter Valid Email.",
            },
          ]}>
          <Input placeholder="Enter Your email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: `Password should be contains at least one alphabet and
                  contains at least one digit and is at least 8 characters long.`,
            },
          ]}>
          <Input.Password placeholder="Enter Your password" />
        </Form.Item>
        <Form.Item
          name="c_password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please input your confirm password!",
            },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The new password that you entered do not match!"));
              },
            }),
          ]}>
          <Input.Password placeholder="Enter Your confirm password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loaderRegister}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default UserRegister;
