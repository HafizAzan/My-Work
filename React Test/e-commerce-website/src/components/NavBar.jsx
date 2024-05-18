import React from 'react'
import { CustomImg } from '../assets/ImageUrl';
import CustomButton from './CustomButton';

function NavBar() {
    const Login = "Login"
  return (
    <>
          <navbar className="nav">
              <div>
              <img src={CustomImg.logo} alt="logo" />
              </div>
              <nav>
                  <ul>
                      <li><a>Shop</a></li>
                      <li><a>Men</a></li>
                      <li><a>Women</a></li>
                      <li><a>Kid</a></li>
                  </ul>
              </nav>
              <div>
                 <CustomButton type="primary" btnName={Login}/>
              </div>
          </navbar> 
    </>
  )
}

export default NavBar;
