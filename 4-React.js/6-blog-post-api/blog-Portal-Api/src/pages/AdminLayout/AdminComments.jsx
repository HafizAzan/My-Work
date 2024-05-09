import { Table, Tag } from 'antd'
import React from 'react'
import { useQuery } from 'react-query'
import { StoreComment } from '../../services/comment.service'
import { helperService } from '../../utils/helper';

function AdminComments() {
    const { data , isLoading} = useQuery("comments", () => StoreComment.getComment());
    const dataComment = data?.data?.results;
    const columns = [
        {
            title: "Comment Id",
            dataIndex: "comment_id",
            key: "comment_id",
        },
        {
            title: "User Name",
            dataIndex: ["user","username"],
            key: "user.username",
        },
        {
            title: "Post Title",
            dataIndex: ["post","post_title"],
            key: "post.post_title",
        },
        {
            title: "Comment Content",
            dataIndex: "comment_content",
            key: "comment_content",
        },
        {
            title: "Create At",
            key: "created_at",
            dataIndex: "created_at",
            render: (indexData , row) => {
                return helperService.convertDate(indexData)
            }
        },
        {
            title: "Updated At",
            key: "updated_at",
            dataIndex: "updated_at",
            render: (indexData , row) => {
                return helperService.convertDate(indexData)
            }
        },

        {
            title: "Comment Status",
            key: "comment_content",
            dataIndex: "comment_status",
        },
        {
            title: "Action",
            key: "comment_content",
            dataIndex: "comment_status",
            render: (status) => {
                const color = status === "unapproved" ? "#87d068" : "#f50";
                return (
                    <Tag color={color}>{status === "unapproved" ? "Approve" : "Un Approve"}</Tag>
                )
            }
        },

    ]
  return (
    <>
    <h1>Comments</h1>
       <Table columns={columns} dataSource={dataComment} loading={ isLoading}/>   
    </>
  )
}

export default AdminComments
