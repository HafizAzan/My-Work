/** @format */

import React from "react";
import { Typography, Form, Input, Button, message } from "antd";
import { useMutation } from "react-query";
import { RegisterUser } from "../services/users.register";
import { Authenticated_Path_Url, Regex_Message, Regex_Pattern, URL_Path } from "../utils/constant";
import { ServiceToken } from "../utils/auth";
const { Title } = Typography;
function LoginForm() {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const { mutateAsync: LoginRequest, isLoading: loaderLogin } = useMutation("login", (body) => RegisterUser.LoginForm(body));

  const onFinish = (values) => {
    LoginRequest(values, {
      onSuccess: (data) => {
        messageApi.open({
          type: "success",
          content: "user logged is succesfully!",
        });
        form.resetFields();
        const TokenData = data?.data?.results;
        ServiceToken.saveToken(TokenData?.token);
        ServiceToken.SaveUserToken(TokenData?.username);
        window.location.href = Authenticated_Path_Url.DashBoard;
      },
    });
  };

  return (
    <div>
      {contextHolder}
      <Title level={1}>Login Form</Title>
      <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Plz Enter Valid Email",
            },
          ]}
          initialValue="oscar41@example.net">
          <Input placeholder="Enter Your Email Valid." />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              pattern: Regex_Pattern,
              message: Regex_Message,
            },
          ]}
          initialValue="admin123@">
          <Input.Password placeholder="Enter Your Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loaderLogin}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
