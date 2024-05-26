import React, { useMemo, useState } from 'react'
import MainContent from '../components/mainContent'
import { ImageUrl } from '../Utils/ImageUrl'
import { Typography } from 'antd'
import CustomCard from '../components/CustomCard'
import ExclusiveCard from '../components/ExclusiveCard'
import { useQuery } from 'react-query'
import { AllProducts } from '../apiServices/Products.service'
import ProductsData from '../Api.json'
function Home() {
  const { data: productsData } = useQuery("Products", () => AllProducts.getAllProducts());
  console.log(productsData, "productsData");
  const lastFourProducts = useMemo(() => {
    return productsData?.data.slice(-4);
  }, [productsData]);


  const { data } = ProductsData;
  console.log(data);

  const KidData = useMemo(() => {
    return data.slice(-10)
  }, [data])

  return (
    <>
      <MainContent image={ImageUrl.women_7} />
      <div className='FomusClothes'>
        <Typography.Title level={1}>Famous in Women</Typography.Title>
        <hr />
        <div className='flexDiv'>
          {lastFourProducts?.length > 0 && lastFourProducts.map((single) => {
            return <CustomCard src={single.image} Title={single.title} price={single.price} women={false} />
          })}
        </div>
      </div>
      <ExclusiveCard show={false} Title={<h1>EXCLUSIVE <br /> OFFERS FOR YOU </h1>} paragraph={<p>ONLY ON BEST SELLERS PRODUCTS</p>}></ExclusiveCard>
      <div className='FomusClothes FomusClothes1'>
        <Typography.Title level={1}>KIDs COLLECTION</Typography.Title>
        <hr />
        <div className='flexDiv flexDiv1'>
          {KidData && KidData.map((single) => {
            return <CustomCard src={single.image} singleId={single.id} Title={single.name} price={single.price} />
          })}
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
