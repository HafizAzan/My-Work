/** @format */

import { Button, Popconfirm, Table, notification } from "antd";
import { useMutation, useQuery } from "react-query";
import { ApiBaseUrl } from "../Constant";
import "../App.css";
import React from "react";
import { useNavigate } from "react-router";

function PostApi() {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const {
    data: post,
    isLoading: GetPostLoader,
    refetch: updatedData,
  } = useQuery("posts", () => {
    return fetch(`${ApiBaseUrl}/posts`).then((resolve) => resolve.json());
  });
  const { mutateAsync: DeletePost, isLoading: loaderDeleter } = useMutation("deletePosts", (postId) => {
    return fetch(`${ApiBaseUrl}/posts/${postId}`, {
      method: "DELETE",
    }).then((data) => data.json());
  });
  const deletePostHandler = (postId) => {
    DeletePost(postId, {
      onSuccess: () => {
        api.open({
          message: "Success",
          description: "Your Post is Deleted!",
          duration: 3,
        });
        updatedData();
      },
    });
  };

  const columns = [
    {
      title: "Post ID",
      render: (single) => {
        return single.id;
      },
    },
    {
      title: "Post Title",
      dataIndex: "post_title",
    },
    {
      title: "Post Date",
      dataIndex: "post_date",
    },
    {
      title: "Post Image",
      render: (single) => {
        if (!single.image) {
          return "NOT FOUND!";
        }
        return <img src={single.image} alt="images" />;
      },
    },
    {
      title: "Post Status",
      dataIndex: "post_status",
    },
    {
      title: "Action In Post",
      render: (single) => {
        return (
          <React.Fragment>
            <Button type="primary" onClick={() => navigate(`/edit-post/${single.id}`)}>
              Edit
            </Button>
            {""}
            <Popconfirm title="Delete the Post" description="Are you sure to delete this Post?" okText="Yes" cancelText="No" onConfirm={() => deletePostHandler(single.id)}>
              <Button type="default" style={{ marginLeft: "20px" }}>
                Delete
              </Button>
            </Popconfirm>
          </React.Fragment>
        );
      },
    },
  ];
  return (
    <>
      <h1 id="heading">POSTS</h1>
      <div className="container">
        <Table columns={columns} dataSource={post?.results} loading={GetPostLoader || loaderDeleter} rowKey={(single) => single.id} />
      </div>
      {contextHolder}
    </>
  );
}

export default PostApi;
