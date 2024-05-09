import { Button, Modal, Table, message, Flex, Tag } from 'antd';
import React from 'react'
import { helperService } from '../../utils/helper';
import { useMutation, useQuery } from 'react-query';
import { RegisterUser } from '../../services/users.register';
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { Authenticated_Path_Url } from '../../utils/constant';
import { postService } from '../../services/posts.service';

function AdminPosts() {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const { data, isLoading, isFetching, refetch: UpdatePostUser } = useQuery("posts", () => postService.getPosts());
    const { mutateAsync: DeletePostFunc, isLoading: DeleteLoader } = useMutation("postDelete", (postId) => postService.DeletePostById(postId))
   
    const deleteBtnHandler = (post) => {
        Modal.confirm({
            title: "Do you Want To Delete This Post?",
            icon: <ExclamationCircleOutlined />,
            onOk: () => {
                DeletePostFunc(post?.id, {
                    onSuccess: () => {
                        messageApi.open({
                            type: "success",
                            content: "Post is Delete SuccessFully!"
                        })
                        UpdatePostUser()
                    }
                })
            }
        })

    }

    const columns = [
        {
            title: 'Id',
            key: 'id',
            dataIndex: "id",
        },
        {
            title: 'Title',
            key: 'post_title',
            dataIndex: "post_title",
        },
        {
            title: 'Tags',
            key: 'post_tags',
            dataIndex: "post_tags",
            render: (indexeData , row) => {
                return (
                <Flex gap="4px 0" wrap>
                <Tag color="success">{indexeData}</Tag>
              </Flex>)
            }
        },
        {
            title: 'Status',
            key: 'post_status',
            dataIndex: "post_status",
        },
        {
            title: 'Author',
            key: 'post_author',
            dataIndex: "post_author",
        },
        {
            title: 'Content',
            key: 'post_content',
            dataIndex: "post_content",
        },
        {
            title: 'Date',
            key: 'date',
            render: (row) => {
                return helperService.convertDate(row?.post_date)
            }
        },
        {
            title: 'Image',
            key: 'image',
            render: (row) => {
                if (!row?.image) return "Image Not Found"
                return <img src={row?.image} width="80" />
            }
        },
        {
            title: 'Upadted At',
            key: 'updated at',
            render: (row) => {
                return helperService.convertDate(row?.updated_at);
            }
        },
        {
            title: "Edit",
            render: (row) => {
                return <Button type="primary" onClick={()=>navigate(Authenticated_Path_Url.EDIT_POST.replace(":postId",row?.id))}>Edit</Button>;
            },
        },
        {
            title: "Delete",
            render: (post) => {
                return (
                    <Button
                        type="primary"
                        style={{
                            backgroundColor: "red",
                        }}
                        onClick={() => deleteBtnHandler(post)}
                    >
                        Delete
                    </Button>
                );
            },
        },
    ];
    return (
        <div>
            {contextHolder}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1>Admin Posts</h1>
                <Button type='primary' onClick={() => navigate(Authenticated_Path_Url.ADD_POST)}>Add Post</Button>
            </div>
            <Table columns={columns} dataSource={data?.data?.results} loading={isLoading || isFetching || DeleteLoader} style={{ overflowX: "auto" }} />;
        </div>
    )
}

export default AdminPosts;