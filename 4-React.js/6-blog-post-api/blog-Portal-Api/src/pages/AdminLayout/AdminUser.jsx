import { Button, Modal, Table, message, Flex, Tag } from 'antd';
import React from 'react'
import { helperService } from '../../utils/helper';
import { useMutation, useQuery } from 'react-query';
import { RegisterUser } from '../../services/users.register';
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { Authenticated_Path_Url } from '../../utils/constant';

function AdminUser() {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const { data, isLoading, isFetching, refetch: UpdatePostUser } = useQuery("users", () => RegisterUser.getUsersPost())
    const { mutateAsync: DeletePostFunc, isLoading: DeleteLoader } = useMutation("userDelete", (userId) => RegisterUser.deleteUsersPostId(userId))
    const deleteBtnHandler = (row) => {
        Modal.confirm({
            title: "Do you Want To Delete This Category ?",
            icon: <ExclamationCircleOutlined />,
            onOk: () => {
                DeletePostFunc(row?.user_id, {
                    onSuccess: () => {
                        messageApi.open({
                            type: "success",
                            content: "user is Delete SuccessFully!"
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
            key: 'user_id',
            dataIndex: "user_id",
        },
        {
            title: 'Name',
            key: 'username',
            dataIndex: "username",
        },
        {
            title: 'First Name',
            key: 'user_firstname',
            dataIndex: "user_firstname",
        },
        {
            title: 'Last Name',
            key: 'user_lastname',
            dataIndex: "user_lastname",
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: "email",
        }, {
            title: 'Image',
            key: 'image',
            render: (row) => {
                if (!row?.user_image) return "Image Not Found"
                return <img src={row?.user_image} width="80" />
            }
        }, {
            title: 'Role',
            key: 'role',
            render: (row) => {
                return <>
                    <Flex gap="4px 0" wrap="wrap">
                        <Tag color="lime">{row?.user_role}</Tag>
                    </Flex>
                </>
            }
        },
        {
            title: 'Create At',
            key: 'create at',
            render: (row) => {
                return helperService.convertDate(row?.created_at);
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
                return <Button type="primary" onClick={()=>navigate(Authenticated_Path_Url.EDIT_USER.replace(":userId",row?.user_id))}>Edit</Button>;
            },
        },
        {
            title: "Delete",
            render: (row) => {
                return (
                    <Button
                        type="primary"
                        style={{
                            backgroundColor: "red",
                        }}
                        onClick={() => deleteBtnHandler(row)}
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
                <h1>User Posts</h1>
                <Button type='primary' onClick={() => navigate(Authenticated_Path_Url.ADD_USER)}>Add User</Button>
            </div>
            <Table columns={columns} dataSource={data?.data?.results} loading={isLoading || isFetching || DeleteLoader} style={{ overflowX: "auto" }} />;
        </div>
    )
}

export default AdminUser;
