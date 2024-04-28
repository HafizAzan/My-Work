import React from 'react';
import { UserOutlined,LineChartOutlined,AlignCenterOutlined,BookOutlined,LogoutOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ServiceToken } from '../../utils/auth';
import { Authenticated_Path_Url, URL_Path } from '../../utils/constant';
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: 1,
    icon: <LineChartOutlined />,
    label: <Link to={Authenticated_Path_Url.DashBoard}>Dashboard</Link>,
  },
    {
    key: 2,
    icon: <AlignCenterOutlined />,
    label: <Link to={Authenticated_Path_Url.Admin_Category}>Categories</Link>,
  },
    {
    key: 3,
    icon:<UserOutlined />,
    label: <Link to={Authenticated_Path_Url.USER}>Users</Link>,
  },
    {
    key: 4,
    icon: <BookOutlined />,
    label: "Posts",
  },
  {
    key: 5,
    icon: <LogoutOutlined />,
    label: <div onClick={() => {
     ServiceToken.removeToken();
      window.location.href = URL_Path.Home;
    } }>Logout</div>,
  }

]
const AdminLayout = () => {
  const navigate = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" style={{ marginTop: 30, }} />
        <div>
          <Button type='primary' style={{ marginLeft: 30, width: 100, }}
         onClick={() => navigate(URL_Path.Home)}
          >Home
          </Button>
        </div>
      
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 485,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;