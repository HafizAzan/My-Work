import React from 'react';
import { Button, Form, Input, Spin, message } from 'antd';
import { useMutation } from 'react-query';
import { CategoryService } from '../../services/categories.service';
import { useNavigate } from 'react-router-dom';
import { Authenticated_Path_Url } from '../../utils/constant';

const AdminAddCategories = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const { mutateAsync: AddCateRequest, isLoading } = useMutation("addCate", CategoryService.AddCategory)
    const onFinish = (values) => {
        AddCateRequest(values, {
            onSuccess: () => {
                messageApi.open({
                    type: "success",
                    content: "Category is added successfully.",
                });
                form.resetFields();
                setTimeout(() => {
                    navigate(Authenticated_Path_Url.Admin_Category)
                },2000)
            }
        })
    };
    return (
        <Spin spinning={isLoading}>
            {contextHolder}
        <Form
            name="basic"
            onFinish={onFinish}
                autoComplete="off"
                form={form}
        >
            <Form.Item
                name="cat_title"
                rules={[
                    {
                        required: true,
                        message: 'Please input your category name!',
                    },
                ]}
            >
                <Input placeholder='Enter Category Name' />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={isLoading}>
                Post
            </Button>
            </Form>
            </Spin>)
};
export default AdminAddCategories;