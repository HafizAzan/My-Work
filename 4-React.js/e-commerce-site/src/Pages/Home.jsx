import React, { useMemo } from 'react'
import MainContent from '../components/mainContent'
import { ImageUrl } from '../Utils/ImageUrl'
import { Typography } from 'antd'
import CustomCard from '../components/CustomCard'
import CustomButton from '../components/CustomButton'
function Home() {

  return (
    <>
      <MainContent image={ImageUrl.women_7} />
      <div className='FomusClothes'>
        <Typography.Title level={1}>Famous in Women</Typography.Title>
        <hr />
        <div className='flexDiv'>
          <CustomCard image={ImageUrl.women_1} price="80" />
        </div>
      </div>
      <div className='ExulisiveCard'>
        <div className='Shelter'>
          <h1>EXCLUSIVE <br /> OOFERS FOR YOU </h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <CustomButton type="primary" className="btn" btnName="Check Now" />
        </div>
      </div>
    </>

  )
}

export default Home
