/** @format */

import { Button, Input, Typography, Form, DatePicker, Select, notification, Spin } from "antd";
import React, { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { ApiBaseUrl } from "../Constant";
import moment from "moment";

function EditPost() {
  const { postId } = useParams();
  const [api, contextHolder] = notification.useNotification();
  const navigator = useNavigate();
  const [form] = Form.useForm();

  const { data: categoryId, isLoading: loaderCategory } = useQuery("categories", () => {
    return fetch(`${ApiBaseUrl}/categories`).then((data) => data.json());
  });
  const Category = categoryId?.results;

  const { data: editPostResponse, isLoading: editPostLoader } = useQuery(
    ["post", postId],
    () => {
      return fetch(`${ApiBaseUrl}/posts/${postId}`).then((res) => res.json());
    },
    {
      enabled: Boolean(postId) && Boolean(Category),
    }
  );

  const editPostData = editPostResponse?.results;
  console.log(editPostData);
  useEffect(() => {
    if (editPostData) {
      form.setFieldsValue({
        post_title: editPostData?.post_title,
        post_category_id: editPostData?.post_category_id,
        post_author: editPostData?.post_author,
        post_date: moment(editPostData?.post_date),
        post_content: editPostData?.post_content,
        post_status: editPostData?.post_status,
        post_tags: editPostData?.post_tags,
      });
    }
  }, [editPostData]);

  const { mutateAsync: UpdatePutFunc, isLoading: updatedLoader } = useMutation(["updatePost", postId], (payload) =>
    fetch(`${ApiBaseUrl}/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json())
  );

  const onFinish = (values) => {
    const payload = { ...values };
    payload.post_date = moment(payload.post_date);
    UpdatePutFunc(payload, {
      onSuccess: () => {
        form.resetFields();
        api.open({
          message: "Success",
          description: "Post is updated successfully",
          duration: 1,
        });
        setTimeout(() => {
          navigator("/");
        }, [2000]);
      },
    });
  };
  const filterOption = (input, option) => (option?.children ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <Typography.Title id="heading">Edit Post</Typography.Title>
      <div className="container2">
        {contextHolder}
        <Form
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off">
          <Form.Item
            name="post_title"
            rules={[
              {
                required: true,
                message: "Please input your post_title!",
              },
            ]}>
            <Input placeholder="post_title" />
          </Form.Item>
          <Form.Item
            name="post_author"
            rules={[
              {
                required: true,
                message: "Please input your post_author!",
              },
            ]}>
            <Input placeholder="post_author" />
          </Form.Item>

          <Form.Item
            name="post_status"
            rules={[
              {
                required: true,
                message: "Please input your post_status!",
              },
            ]}>
            <Select placeholder="post_status">
              <Select.Option value="draft">Draft</Select.Option>
              <Select.Option value="publish">Publish</Select.Option>
            </Select>
          </Form.Item>
          <Spin spinning={loaderCategory || updatedLoader || editPostLoader} style={{ textAlign: "center", width: "100%" }} />
          <Form.Item
            name="post_category_id"
            rules={[
              {
                required: true,
                message: "Please input your post_category_id!",
              },
            ]}>
            <Select placeholder="post_category_id" showSearch filterOption={filterOption}>
              {Category?.length > 0 &&
                Category.map((singleCategory) => {
                  return <Select.Option value={singleCategory.cat_id}>{singleCategory.cat_title}</Select.Option>;
                })}
            </Select>
          </Form.Item>
          <Form.Item
            name="post_date"
            rules={[
              {
                required: true,
                message: "Please input your post_date!",
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
            <Input.TextArea placeholder="post_content" />
          </Form.Item>
          <Form.Item
            name="post_tags"
            rules={[
              {
                required: true,
                message: "Please input your post_tags!",
              },
            ]}>
            <Input placeholder="post_tags" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            style={{ marginRight: "76rem" }}>
            <Button type="primary" htmlType="submit" loading={loaderCategory || updatedLoader || editPostLoader}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default EditPost;
