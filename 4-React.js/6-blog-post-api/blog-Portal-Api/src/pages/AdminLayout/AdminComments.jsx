import { Button, Modal, Table, Tag, message } from 'antd'
import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { StoreComment } from '../../services/comment.service'
import { helperService } from '../../utils/helper'
import { ExclamationCircleOutlined } from "@ant-design/icons";

function AdminComments() {
    const [messageApi, contextHolder] = message.useMessage();
    const { data, isLoading ,refetch:reloadComments} = useQuery("comments", () => StoreComment.getComment());
    const dataComment = data?.data?.results;
    const { mutateAsync: DeleteRequestRow, isLoading: loaderComment } = useMutation("deleteRow", (commentId) => StoreComment.DeleteCommentById(commentId))
    const {mutateAsync:approveCommentrequest ,isLoading:approvedLoader} = useMutation("approveComments",(commentId)=> StoreComment.approveComment(commentId)) 
    const {mutateAsync:unapproveCommentrequest, isLoading:unapprovedLoader } = useMutation("unapproveComments",(commentId)=> StoreComment.unapproveComment(commentId)) 
   
    const DeleteRowHandler = (row) => {
        Modal.confirm({
            title: "Do You Want To Delete This Comment ?",
            icon: <ExclamationCircleOutlined />,
            onOk: () => {
                DeleteRequestRow(row?.comment_id, {
                    onSuccess: () => {
                        messageApi.open({
                            type: "success",
                            content : "Your post Is Deleted SuccessFully!"
                        })
                        reloadComments();
                    }
                })
            }
        })
    }
    const CommentsHandler = (status ,row) => {
        if (status === "unapproved") {
            approveCommentrequest(row?.comment_id, {
                onSuccess: () => {
                    reloadComments();
                }
            })
        } else {
            unapproveCommentrequest(row?.comment_id, {
                onSuccess: () => {
                    reloadComments();
                }
            })            
        }
    }
    const columns = [
        {
            title: "Comment Id",
            dataIndex: "comment_id",
            key: "comment_id",
        },
        {
            title: "User Name",
            dataIndex: ["user", "username"],
            key: "user.username",
        },
        {
            title: "Post Title",
            dataIndex: ["post", "post_title"],
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
            render: (indexData, row) => {
                return helperService.convertDate(indexData)
            }
        },
        {
            title: "Updated At",
            key: "updated_at",
            dataIndex: "updated_at",
            render: (indexData, row) => {
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
            render: (status,rowObject) => {
                const color = status === "unapproved" ? "#87d068" : "#f50";
                return (
                    <Tag color={color} onClick={() => CommentsHandler(status , rowObject)} style={{cursor:"pointer"}}>{status === "unapproved" ? "Approve" : "Un Approve"}</Tag>
                )
            }
        },
        {
            title: "Delete",
            key: "Delete Row",
            render: (row) => {
                return <Button style={{ background: "red" }} type='primary' onClick={() => DeleteRowHandler(row)}>Delete</Button>
            }
        }

    ]
    return (
        <>
            {contextHolder}
            <h1>Comments</h1>
            <Table columns={columns} dataSource={dataComment} loading={isLoading || loaderComment || approvedLoader || unapprovedLoader} />
        </>
    )
}

export default AdminComments
