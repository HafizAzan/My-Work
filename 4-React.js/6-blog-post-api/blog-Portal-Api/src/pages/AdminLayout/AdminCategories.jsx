import React from 'react'
import { Button, Table, Modal, message } from 'antd';
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from 'react-query';
import { CategoryService } from '../../services/categories.service';
import { helperService } from '../../utils/helper';
import { useNavigate } from 'react-router-dom';
import { Authenticated_Path_Url } from '../../utils/constant';
const {confirm} = Modal;
function AdminCategories() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();  
  const { data, isLoading, isFetching ,refetch:updateRefetch} = useQuery("categories", () => CategoryService.getCategory());
  const { mutateAsync:DeleteRowFunc ,isLoading:loaderCatDelete} = useMutation("deleteRow", (catId) => CategoryService.deleteCategoryById(catId));


  const DeleteRowHandler = (row) => {
    const catId = row?.cat_id;
    confirm({
      title: "Do you Want To Delete This Category ?",
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        DeleteRowFunc(catId, {
          onSuccess: () => {
            messageApi.open({
              type: "success",
              content: "Category is deleted successfully.",
            });
            updateRefetch();
          }
        });
      },
    })
  }
const columns = [
  {
    title: 'user',
    key: 'userid',
    dataIndex: "cat_id",
  },
  {
    title: 'Name',
    key: 'name',
    dataIndex: "cat_title",
  },
  {
    title: 'Create At',
    key: 'create at',
      render: (row) => {
          return helperService.convertDate( row?.created_at);
    }
    },
  {
    title: 'Upadted At',
    key: 'updated at',
      render: (row) => {
        return helperService.convertDate( row?.updated_at);
    }
    },
    {
     title: "Edit",
    key: "edit",
    render: () => {
        return <Button type='primary'>Edit</Button>
    }
    },
    {
    title: "Delete",
    key: "delete",
    render: (row) => {
        return <Button type='primary' style={{backgroundColor:"red"}} onClick={() => DeleteRowHandler(row)}>Delete</Button>
    }
    },
];
return (
  <div>
    {contextHolder}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center",}}>
      <h1>Categories</h1>
      <Button type='primary' onClick={() => navigate(Authenticated_Path_Url.ADD_CATEGORY)}>Add Category</Button>
      </div>
    <Table dataSource={data?.data?.results} columns={columns} loading={isLoading||isFetching || loaderCatDelete} />;
    </div>
  )
}

export default AdminCategories
