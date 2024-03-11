/** @format */

import React, { useState } from "react";
import "../App.css";
import { Button, DatePicker, Form, Input, Select, Typography, notification } from "antd";
import { useMutation, useQuery } from "react-query";
import { ApiBaseUrl } from "../Constant";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import ImageUploader from "../component/ImageUploader";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
function CreatePost() {
  const [api, contentHolder] = notification.useNotification();
  const Navigate = useNavigate();
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);

  const { data: Category, isLoading: loaderCategory } = useQuery("categories", () => {
    return fetch(`${ApiBaseUrl}/categories`).then((data) => data.json());
  });
  const CategoryData = Category?.results;

  const { mutateAsync: storeDataRequest, isLoading: loaderRequest } = useMutation("createposts", (formData) =>
    fetch(`${ApiBaseUrl}/posts`, {
      method: "POST",
      body: formData,
    }).then((dataStore) => dataStore.json())
  );

  const onFinish = (values) => {
    const payload = { ...values };
    payload.post_date = moment(payload.post_date);

    const formData = new FormData();
    // formData,append(payload?.post_title) esay lambi hori hai

    Object.entries(payload).forEach((singleArray) => {
      const [key, value] = singleArray;
      formData.append(key, value);
    });

    if (file) {
      formData.append("image", file);
    }
    storeDataRequest(formData, {
      onSuccess: () => {
        form.resetFields();
        api.open({
          message: "Success",
          description: "Post is created successfully",
          duration: 1,
        });
        setTimeout(() => {
          Navigate("/");
        }, [3000]);
      },
    });
  };

  const filterOption = (input, option) => (option?.children ?? "").toLowerCase().includes(input.toLowerCase());
  const imageUploader = (fileParam) => {
    setFile(fileParam);
  };
  return (
    <>
      <Typography.Title id="heading">Create Post</Typography.Title>
      <div className="container2">
        {contentHolder}
        <Form
          form={form}
          {...formItemLayout}
          variant="filled"
          style={{
            width: "100%",
          }}
          onFinish={onFinish}
          autoComplete="off">
          <Form.Item
            name="post_title"
            rules={[
              {
                required: true,
                message: "Please fill the post_title!",
              },
            ]}>
            <Input placeholder="post_title" width="60rem" />
          </Form.Item>

          <Form.Item
            name="post_author"
            rules={[
              {
                required: true,
                message: "Please fill the post_author!",
              },
            ]}>
            <Input placeholder="post_author" />
          </Form.Item>

          <Form.Item
            name="post_date"
            rules={[
              {
                required: true,
                message: "Please fill the post_date!",
              },
            ]}>
            <DatePicker placeholder="post_date" className="w-100" />
          </Form.Item>

          <Form.Item
            name="post_content"
            rules={[
              {
                required: true,
                message: "Please input your post_content!",
              },
            ]}>
            <Input.TextArea placeholder="Post Content" />
          </Form.Item>

          <Form.Item
            name="post_status"
            rules={[
              {
                required: true,
                message: "Please input your post_status!",
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
                message: "Please input your post_category!",
              },
            ]}>
            <Select placeholder="Post Category" showSearch filterOption={filterOption}>
              {CategoryData?.length > 0 &&
                CategoryData?.map((singleCategory) => {
                  return <Select.Option value={singleCategory.cat_id}>{singleCategory.cat_title}</Select.Option>;
                })}
            </Select>
          </Form.Item>

          <Form.Item
            name="post_tags"
            rules={[
              {
                required: true,
                message: "Please input your post_tags!",
              },
            ]}>
            <Input placeholder="Post Tags" />
          </Form.Item>
          <Form.Item>
            <ImageUploader customFunction={imageUploader} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loaderCategory || loaderRequest}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default CreatePost;
