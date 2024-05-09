import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Select, Typography, message } from "antd";
import { useMutation, useQuery } from "react-query";
import { RegisterUser } from "../../services/users.register";
import { Authenticated_Path_Url, Regex_Message, Regex_Pattern } from "../../utils/constant";
import CustomUploadImg from "../../component/CustomUploadImg";
import { useNavigate, useParams } from "react-router-dom";
import { postService } from "../../services/posts.service";
import { CategoryService } from "../../services/categories.service";
import moment from "moment";
const { Title } = Typography;

function AdminAddPost() {
    const { postId } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [messageApi, ContextHolder] = message.useMessage();
    const [fileSave, setFileSave] = useState(null);

    const customRequestCallBack = (binaryFileObject) => {
        setFileSave(binaryFileObject)
    }

    const { mutateAsync: RegisterReqeust, isLoading: loaderRegister } = useMutation("posts",
    (payload) => postService.StorePosts(payload));
    
    const { mutateAsync: UpdatePostData, isLoading: UpdateUserLoader } = useMutation("UpdateData",
    (data) => postService.UpdatePostData(postId, data));

    const { data } = useQuery("categories", () => CategoryService.getCategory());
    const CategoryDataEdit = data?.data ?.results;
    
    const { data: EditDataPost, isLoading: EditDataLoader } = useQuery(["Edit", postId], () => postService.getPostById(postId), {
        enabled: Boolean(postId)
    })
    const EditData = EditDataPost?.data?.results;

    const onFinish = (values) => {
        const payload = values;
        if (fileSave) {
            payload.post_image = fileSave
        }
        const formData = new FormData();
        Object.keys(payload).map((singleKey) => {
            formData.append(singleKey, payload[singleKey])
        })

        if (fileSave) {
            formData.append("post_image", fileSave)
        }
        if (postId) {
            UpdatePostData(formData, {
                onSuccess: () => {
                    messageApi.open({
                        type: "success",
                        content: "Post is Update succesfully!",
                    });
                    setTimeout(() => {
                        navigate(Authenticated_Path_Url.POST)
                    }, 2000);
                }
            })
        } else {
            RegisterReqeust(formData, {
                onSuccess: () => {
                    messageApi.open({
                        type: "success",
                        content: "Post is Create succesfully!",
                    });
                    setTimeout(() => {
                        navigate(Authenticated_Path_Url.POST)
                    }, 2000);
                }
            }) 
        }
    }

    useEffect(() => {
        if (EditData) {
            form.setFieldsValue({
                post_title: EditData?.post_title,
                post_author:EditData?.post_author,
                post_content:EditData?.post_content,
                post_status:EditData?.post_status,
                post_category_id:EditData?.post_category_id,
                post_tags:EditData?.post_tags,
                post_date:moment(EditData?.post_date),    
            })
        }
    }, [EditData])

    const filterOption = (input, option) => (option?.children ?? "").toLowerCase().includes(input.toLowerCase());

    return (
        <div>
            <Title level={2}>Admin {postId ? "Update" : "Create"} Post</Title>
            {ContextHolder}
            <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
                <Form.Item
                    name="post_title"
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Title!",
                        },
                    ]}>
                    <Input placeholder="Enter Title" />
                </Form.Item>
                <Form.Item
                    name="post_author"
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Your Author!",
                        },
                    ]}>
                    <Input placeholder="Enter Your Author" />
                </Form.Item>
                <Form.Item
                    name="post_content"
                    rules={[
                        {
                            required: true,
                            message: "Please Enter Your Content!",
                        },
                    ]}>
                    <Input placeholder="Enter Your Content" />
                </Form.Item>
                <Form.Item
                    name="post_status"
                    rules={[
                        {
                            required: true,
                            message: "Please input your status!",
                        },
                    ]}>
                    <Select placeholder="Post Status">
                        <Select.Option value="draft">Draft</Select.Option>
                        <Select.Option value="publish">Publish</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="post_category_id"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Category Title!",
                        }
                    ]}>
                    <Select placeholder="Post Category" showSearch filterOption={filterOption}>
                    {CategoryDataEdit?.length > 0  && CategoryDataEdit?.map((single) => {
                        return <Select.Option value={single?.cat_id}>{single?.cat_title}</Select.Option>
                    })}
                   </Select>
                </Form.Item>

                <Form.Item
                    name="post_tags"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Tags!",
                        }
                    ]}>
                    <Input placeholder="Enter Your Tags" />
                </Form.Item>
                <Form.Item
                    name="post_date"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Date!",
                        }
                    ]}>
                    <DatePicker placeholder="Enter Your Date" className="w-80" />
                </Form.Item>
                <CustomUploadImg customRequestCallBack={customRequestCallBack} />

                {/* {EditData?.post_image && (
                    <div style={{ marginBottom: 30, marginTop: 30 }}>
                        <img src={EditData?.user_image} alt={EditData?.email} width={150} />
                    </div> 
                )} */}

                <Button style={{ paddingTop: "20" }} type="primary" htmlType="submit" loading={loaderRegister || EditDataLoader || UpdateUserLoader}>
                    {postId ? "Update" : "Add"} Post
                </Button>
            </Form>
        </div>
    );
}

export default AdminAddPost;