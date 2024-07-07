import React, { useEffect, useMemo, useState } from 'react';
import MainContent from '../components/mainContent';
import { Typography } from 'antd';
import CustomCard from '../components/CustomCard';
import ExclusiveCard from '../components/ExclusiveCard';
import ProductsData from '../Api.json';
import { ImageUrl } from '../Utils/ImageUrl';
import Loader from './Loader';
import CustomSkeletonLoader from '../components/CustomSkeleton';
function Home() {
  const { data } = ProductsData;

  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(false)
  }, [])
  setTimeout(() => {
    setLoader(false)
  }, 6000);

  const lastFourProducts = useMemo(() => {
    return data.slice(-4)
  }, [data])


  const KidData = useMemo(() => {
    return data.slice(20, 26)
  }, [data])

  return (
    <>
      {loader === true ? <Loader /> : null}
      <MainContent image={ImageUrl.women_7} />
      <div className='FomusClothes FomusClothes01'>
        <Typography.Title level={1}>Famous in Women</Typography.Title>
        <hr />
        <div className='flexDiv' id='flexDiv'>
          <CustomCard lastFourProducts={lastFourProducts} women={true} />
        </div>
      </div>

      <ExclusiveCard show={false}
        Title={<h1>EXCLUSIVE <br /> OFFERS FOR YOU </h1>}
        paragraph={<p>ONLY ON BEST SELLERS PRODUCTS</p>}
        image={ImageUrl.women_11}
        className="btn4"
        classs="shelterOpt"
        showbtnho={true}
        id="div3"
      >
      </ExclusiveCard>

      <div className='FomusClothes '>
        <Typography.Title level={1}>KIDs COLLECTION</Typography.Title>
        <hr />
        <div className='flexDiv flexDiv1'>
          <CustomCard Data={KidData} />
        </div>
      </div>

      <ExclusiveCard Title={<h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL </h1>}
        paragraph={<p>Subscribe to our newsletter and stay updated</p>}></ExclusiveCard>
      <div className='footer1'>
        <img src={ImageUrl.logo} width={250} />
        <div>
          <ul className='ul'>
            <li><a href=""></a>Company</li>
            <li><a href=""></a>Products</li>
            <li><a href=""></a>Office</li>
            <li><a href=""></a>About</li>
            <li><a href=""></a>Contact</li>
          </ul>
        </div>
      </div>

    </>

  )
}

export default Home
