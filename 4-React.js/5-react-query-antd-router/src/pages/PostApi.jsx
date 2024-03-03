/** @format */

import React from "react";
import { useMutation, useQuery } from "react-query";
import { baseApiUrl } from "../constant";
import { Button, Popconfirm, Table, notification } from "antd";

function PostApi() {
  const [api, contextHolder] = notification.useNotification();

  const { data: posts, isLoading: postsLoading, refetch: getPostBlogApi } = useQuery("posts", () => fetch(`${baseApiUrl}/posts`).then((data) => data.json()));
  const { mutateAsync: DeletePostApi, isLoading: PostDeleter } = useMutation("deletePosts", (postId) =>
    fetch(`${baseApiUrl}/posts/${postId}`, {
      method: "DELETE",
    }).then((data) => data.json())
  );

  const DeletePostHandler = (postId) => {
    DeletePostApi(postId, {
      onSuccess: () => {
        api.open({
          message: "Succes",
          description: "Post is deleted Succesfully!",
          duration: 3,
        });
        getPostBlogApi();
      },
    });
  };
  const columns = [
    {
      title: "Post-ID",
      render: (singlePostId) => {
        return singlePostId.id;
      },
    },
    {
      title: "Post Title",
      dataIndex: "post_title",
    },
    {
      title: "Post-Date",
      dataIndex: "post_date",
    },
    {
      title: "Post-Image",
      render: (singlePostImg) => {
        if (!singlePostImg.image) {
          return "NOT FONUD!";
        }
        return <img src={singlePostImg.image} width="110px" />;
      },
    },
    {
      title: "Post-Status",
      dataIndex: "post_status",
    },
    {
      title: "Actions",
      render: (singlePost) => {
        return (
          <React.Fragment>
            <Button type="primary">Edit</Button>
            {""}
            <Popconfirm title="Delete the Post" description="Are you sure to delete this Post?" okText="Yes" cancelText="No" onConfirm={() => DeletePostHandler(singlePost.id)}>
              <Button type="default">Delete</Button>
            </Popconfirm>
          </React.Fragment>
        );
      },
    },
  ];
  return (
    <div
      style={{
        width: "90%",
        margin: "0px auto",
      }}>
      <h1>POSTS</h1>
      <Table dataSource={posts?.results} columns={columns} loading={postsLoading || PostDeleter} rowKey={(singlePostId) => singlePostId?.id} />;{contextHolder}
    </div>
  );
}

export default PostApi;
