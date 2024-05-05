import React, { useEffect, useState } from "react";
import { Button, Form, Input, Typography, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { RegisterUser } from "../../services/users.register";
import { Authenticated_Path_Url, Regex_Message, Regex_Pattern } from "../../utils/constant";
import CustomUploadImg from "../../component/CustomUploadImg";
import { useNavigate, useParams } from "react-router-dom";
const { Title } = Typography;

function AdminAddUser() {
  const { userId } = useParams();
  
  const { mutateAsync: RegisterReqeust, isLoading: loaderRegister } = useMutation("register", (payload) => RegisterUser.addUser(payload));
  
  const [form] = Form.useForm();
  
  const navigate = useNavigate();
  
  const [messageApi, ContextHolder] = message.useMessage();
  
  const { mutateAsync: UpdateUserData, isLoading: UpdateUserLoader } = useMutation("UpdateData", (data) => RegisterUser.UpdateUserData(userId, data));



  const onFinish = (values) => {
    const payload = values;
    if (fileSave) {
      payload.user_image = fileSave
    }
    const formData = new FormData();
    Object.keys(payload).map((singleKey) => {
      formData.append(singleKey, payload[singleKey])
    })

    if (fileSave) {
      formData.append("user_image", fileSave)
    }

    if (userId) {
      UpdateUserData(payload, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "User is Update succesfully!",
          });
        },
      });
      setTimeout(() => {
        navigate(Authenticated_Path_Url.USER)
      }, 2000);
    } else {
      RegisterReqeust(formData, {
        onSuccess: () => {
          messageApi.open({
            type: "success",
            content: "User is Registered succesfully!",
          });
        },
      });
      setTimeout(() => {
        navigate(Authenticated_Path_Url.USER)
      }, 2000);
    }
  };

  const [fileSave, setFileSave] = useState(null);
  const customRequestCallBack = (binaryFileObject) => {
    setFileSave(binaryFileObject)
  }


  const { data: EditDataPost , isLoading:EditDataLoader} = useQuery(["Edit", userId], () => RegisterUser.getUserPostById(userId), {
    enabled: Boolean(userId)
  })

  const EditData = EditDataPost?.data?.results;

  useEffect(() => {
    if (EditData) {
      form.setFieldsValue({
        username: EditData?.username,
        user_firstname: EditData?.user_firstname,
        user_lastname: EditData?.user_lastname,
        email: EditData?.email,
        password: EditData?.password,
        c_password: EditData?.c_password,
      })
    }
  }, [EditData])



  return (
    <div>
      <Title level={2}>Admin {userId ? "Update" : "Create"} Users</Title>
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
              pattern: Regex_Pattern,
              message: Regex_Message,
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
              pattern: Regex_Pattern,
              message: Regex_Message,
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

        <CustomUploadImg customRequestCallBack={customRequestCallBack} />

        {EditData?.user_image && (
          <div style={{marginBottom:30,marginTop:30}}>
            <img src={EditData?.user_image} alt={EditData?.email} width={150}/>
          </div>
        )} 

        <Button type="primary" htmlType="submit" loading={loaderRegister || EditDataLoader || UpdateUserLoader}>
          {userId ? "Update" : "Add"} User
        </Button>
      </Form>
    </div>
  );
}

export default AdminAddUser;