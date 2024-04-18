import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { ServiceToken } from '../../utils/auth';
import { URL_Path } from '../../utils/constant';
const { Header, Content, Footer, Sider } = Layout;
// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//   (icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
//   }),
// );

const items = [
  {
    key: 1,
    icon: <UserOutlined />,
    label: "Dashboard",
  },
    {
    key: 2,
    icon: <UploadOutlined />,
    label: "Categories",
  },
    {
    key: 3,
    icon: <UserOutlined />,
    label: "Users",
  },
    {
    key: 4,
    icon: <VideoCameraOutlined />,
    label: "Posts",
  },
  {
    key: 5,
    icon: <UserOutlined />,
    label: <div onClick={() => {
     ServiceToken.removeToken();
      window.location.href = URL_Path.Home;
    } }>Logout</div>,
  }

]
const AdminLayout = () => {
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
        <div className="demo-logo-vertical"  style={{ marginTop :30,}}/>
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
              minHeight: 360,
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