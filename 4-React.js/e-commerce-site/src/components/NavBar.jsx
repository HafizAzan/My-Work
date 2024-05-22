import React from 'react'
import CustomButton from './CustomButton';
import { ImageUrl } from '../Utils/ImageUrl';
import { Outlet, useNavigate } from 'react-router-dom';
import { UNATHENTICATED_URL } from '../Utils/Route.define';
import { useQuery } from 'react-query';
import { products } from '../apiServices/Products.service';
import { AuthApiService } from '../Utils/auth';
import { message } from 'antd';

function NavBar() {
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()
  const { data } = useQuery("products", () => products.getAllProducts());
  console.log(data);
  return (
    <>
      <navbar className="nav">
        {contextHolder}
        <div>
          <img src={ImageUrl.logo} alt="logo" onClick={() => navigate(UNATHENTICATED_URL.HOME)} />
        </div>
        <nav>
          <ul>
            <li><a>Shop</a></li>
            <li><a>Men</a></li>
            <li><a>Women</a></li>
            <li><a>Kid</a></li>
          </ul>
        </nav>
        <div className='img2'>
          {AuthApiService.IsLoggedIn() ? (
            <CustomButton className="btn1" type="primary" btnName="Logout" onClick={() => {
              AuthApiService.removetoken()
              messageApi.open({
                type: "warning",
                content: "You Logout "
              })
              // setTimeout(() => {
              //   window.location.href = UNATHENTICATED_URL.HOME
              // }, 2000);
            }}></CustomButton>
          ) : (
            <CustomButton className="btn1" type="primary" btnName="Login" onClick={() => navigate(UNATHENTICATED_URL.LOGIN)}></CustomButton>
          )}

          <img src={ImageUrl.cart} alt="cart" />
          <p className='count'>0</p>
        </div>
      </navbar>
      <Outlet />
      <footer className='footer'>

      </footer>
    </>
  )
}

export default NavBar;
