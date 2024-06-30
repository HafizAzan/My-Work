import React, { useEffect, useMemo, useState } from 'react'
import ExclusiveCard from '../components/ExclusiveCard'
import { ImageUrl } from '../Utils/ImageUrl'
import CustomCard from '../components/CustomCard'
import ProductsData from '../Api.json';
import { Typography } from 'antd';
import Loader from './Loader';

function Men() {
    const { data } = ProductsData;

    const [loader, setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
    }, [])
    setTimeout(() => {
        setLoader(false)
    }, 2000);

    const KidData = useMemo(() => {
        return data.slice(0, 10)
    }, [data])

    console.log(KidData);
    return (
        <div className='menCont'>
            {loader === true ? <Loader /> : null}
            <h1 style={{ opacity: "0" }}>Men Clothes</h1>
            <ExclusiveCard show={false}
                Title={<h1>FLAT <br /> 50% OFF </h1>}
                paragraph={<p>12 HOURs 12 MINs</p>}
                image={ImageUrl?.men_11}
                id="div03"
                classs="shelterOpt shelterOpt01"
            >
            </ExclusiveCard>

            <div className='FomusClothes FomusClothes2'>
                <Typography.Title level={1}>MENs COLLECTION</Typography.Title>
                <hr />
                <div className='flexDiv flexDiv1'>
                    <CustomCard Data={KidData} />
                </div>
            </div>
        </div>
    )
}

export default Men
