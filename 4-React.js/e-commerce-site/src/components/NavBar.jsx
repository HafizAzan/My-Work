import React, { useState } from 'react'
import CustomButton from './CustomButton';
import { ImageUrl } from '../Utils/ImageUrl';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UNATHENTICATED_URL } from '../Utils/Route.define';
import { AuthApiService } from '../Utils/auth';
import { message } from 'antd';
import CustomModal from './CustomModal';

function NavBar() {
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()
  const [menuShow, setMenuShow] = useState("Shop")

  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handlerModal = () => {
    console.log("click");
    setOpen(true)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      <navbar className="nav">
        {contextHolder}
        <div>
          <img src={ImageUrl.logo} alt="logo" onClick={() => navigate(UNATHENTICATED_URL.HOME)} />
        </div>
        <nav>
          <ul className='ul'>
            <li onClick={() => setMenuShow("Shop")}><Link to={UNATHENTICATED_URL.HOME}>Shop</Link>{menuShow === "Shop" ? <hr /> : <></>}</li>
            <li onClick={() => setMenuShow("Men")}><Link to={UNATHENTICATED_URL.MEN}>Men</Link>{menuShow === "Men" ? <hr /> : <></>}</li>
            <li onClick={() => setMenuShow("Women")}><Link to={UNATHENTICATED_URL.WOMEN}>Women</Link>{menuShow === "Women" ? <hr /> : <></>}</li>
            <li onClick={() => setMenuShow("Kid")}><Link to={UNATHENTICATED_URL.KID}>Kid</Link>{menuShow === "Kid" ? <hr /> : <></>}</li>
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
            }}>

            </CustomButton>
          ) : (
            <CustomButton className="btn1" type="primary" btnName="Login" onClick={() => navigate(UNATHENTICATED_URL.LOGIN)}></CustomButton>
          )}

          <img src={ImageUrl.cart} alt="cart" onClick={handlerModal} />
          <p className='count'>0</p>
        </div>

        <CustomModal
          setLoading={setLoading}
          loading={loading}
          open={open}
          setOpen={setOpen}
        />

      </navbar>
      <Outlet />
      <footer className='footer'>
        <div>
          <img src={ImageUrl.insta} width={100} />
        </div>
        <div>
          <img src={ImageUrl.whatsapp} width={200} />
        </div>
        <div>
          <img src={ImageUrl.pinterset} width={92} />
        </div>
      </footer>
    </>
  )
}

export default NavBar;
