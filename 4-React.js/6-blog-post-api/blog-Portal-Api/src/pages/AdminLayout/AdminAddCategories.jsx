import React, { useEffect } from 'react';
import { Button, Form, Input, Spin, message } from 'antd';
import { useMutation, useQuery } from 'react-query';
import { CategoryService } from '../../services/categories.service';
import { useNavigate, useParams } from 'react-router-dom';
import { Authenticated_Path_Url } from '../../utils/constant';

const AdminAddCategories = () => {
    const { categoryId } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const { mutateAsync: AddCateRequest, isLoading } = useMutation("addCate", CategoryService.AddCategory)
    const { mutateAsync: UpadteCateRequest, isLoading: updatePostLoader } = useMutation(["UpdateCate", categoryId], (payload) => CategoryService.EditCategoryById(categoryId, payload));
    const { data: EditDataRequest } = useQuery(["editCategory", categoryId], () => CategoryService.getCategoryById(categoryId), {
        enabled: Boolean(categoryId),
    })
    console.log(EditDataRequest?.data?.results);
    useEffect(() => {
        if (EditDataRequest?.data?.results) {
            form.setFieldsValue({
                cat_title: EditDataRequest?.data?.results?.cat_title,
            })
        }
    }, [EditDataRequest?.data?.results])

    const onFinish = (values) => {
        if (categoryId) {
            UpadteCateRequest(values, {
                onSuccess: () => {
                    messageApi.open({
                        type: "success",
                        content: "Category is added successfully.",
                    });
                    form.resetFields();
                    setTimeout(() => {
                        navigate(Authenticated_Path_Url.Admin_Category)
                    }, 2000)
                }
            })
        } else {
            AddCateRequest(values, {
                onSuccess: () => {
                    messageApi.open({
                        type: "success",
                        content: "Category is added successfully.",
                    });
                    form.resetFields();
                    setTimeout(() => {
                        navigate(Authenticated_Path_Url.Admin_Category)
                    }, 2000)
                }
            })
        }

    };
    return (
        <Spin spinning={isLoading}>
            <div><h1>{categoryId ? "Update" : "Create"} Category </h1></div>
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

                <Button type="primary" htmlType="submit" loading={isLoading || updatePostLoader}>
                    {categoryId ? "Update" : "Create"} Category
                </Button>
            </Form>
        </Spin>)
};
export default AdminAddCategories;