/** @format */

import React from "react";
import { Typography, Form, Input, Checkbox, Button } from "antd";
const { Title } = Typography;
function LoginForm() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
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
          ]}>
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
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: `Password should be contains at least one alphabet and
                    contains at least one digit and is at least 8 characters long.`,
            },
          ]}>
          <Input.Password placeholder="Enter Your Password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
