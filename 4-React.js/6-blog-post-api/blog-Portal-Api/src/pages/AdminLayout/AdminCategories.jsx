import { Button, Table } from 'antd';
import React from 'react'
import { useQuery } from 'react-query';
import { CategoryService } from '../../services/categories.service';
import { helperService } from '../../utils/helper';
const columns = [
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
    render: () => {
        return <Button type='primary' style={{backgroundColor:"red"}}>Delete</Button>
    }
    },
];


function AdminCategories() {
    const { data , isLoading , isFetching } = useQuery("categories", () => CategoryService.getCategory());
  return (
    <div>
    <Table dataSource={data?.data?.results} columns={columns} loading={isLoading||isFetching} />;
    </div>
  )
}

export default AdminCategories
