import { Form, Input, message } from 'antd'
import React, { useState } from 'react'
import CustomButton from './CustomButton'
import { useMutation } from 'react-query'
import { UserService } from '../apiServices/LoginApi.service'
import { UNATHENTICATED_URL } from '../Utils/Route.define'
import { AuthApiService } from '../Utils/auth'


function CustomForm({ id, className, antForm, input, input1, antForm1 }) {
    //message antd
    const [messageApi, contextHolder] = message.useMessage();
    // state
    const [IsShow, setIsShow] = useState(true)
    // btnHanlders
    const showBtn = () => {
        setIsShow(!IsShow)
    }
    //Form
    const [form] = Form.useForm()
    //loginRequestPost
    const { mutateAsync: LoginRequest, isLoading } = useMutation("login", (data) => UserService.LoginUserService(data))

    const onFinish = (values) => {
        console.log(values);
        LoginRequest(values, {
            onSuccess: (data) => {
                messageApi.open({
                    type: "success",
                    content: "You Are Login SucessFully."
                })
                console.log(data);
                form.resetFields()
                const Token = data?.token;
                console.log(Token);
                AuthApiService.saveToken(Token);
                setTimeout(() => {
                    window.location.href = UNATHENTICATED_URL.HOME
                }, 3000);
            }
        })
    }

    return (
        <div className={className}>
            {contextHolder}
            {IsShow ? (
                <Form
                    form={form}
                    className={antForm}
                    onFinish={onFinish}
                    name="basic"
                    autoComplete="off"
                >
                    <h1 id={id}>Login Form</h1>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                        initialValue="mor_2314"
                    >
                        <Input placeholder='username' className={input} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        initialValue="83r5^_"
                    >
                        <Input.Password placeholder='password' className={input1} />
                    </Form.Item>
                    <p className='aHref'>
                        <a onClick={() => showBtn()}>Sign up Here.</a>
                    </p>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <CustomButton htmlType="submit" type="primary" btnName="Submit" className="btn2" loading={isLoading} />
                    </div>
                </Form>) : (
                <Form
                    className={antForm1}
                    name="basic"
                    style={{
                        maxWidth: 600,
                    }}
                    autoComplete="off"
                >
                    <h1 id={id}>Register Form</h1>
                    <Form.Item
                        name="FirstName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your FirstName!',
                            },
                        ]}
                    >
                        <Input placeholder='FirstName' className={input} />
                    </Form.Item>
                    <Form.Item
                        name="LastName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your LastName!',
                            },
                        ]}
                    >
                        <Input placeholder='LastName' className={input} />
                    </Form.Item>


                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder='username' className={input} />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                                type: 'email'
                            },
                        ]}
                    >
                        <Input placeholder='Email' className={input} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='password' className={input1} />
                    </Form.Item>

                    <Form.Item
                        name="c_password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your confirm_password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='confirm_password' className={input1} />
                    </Form.Item>

                    <p className='aHref' onClick={() => showBtn()}><a>Login Here.</a></p>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <CustomButton type="primary" btnName="Submit" className="btn2" />
                    </div>
                </Form>)}
        </div>
    )
}

export default CustomForm
