import { Typography } from 'antd'
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import ProductsData from '../Api.json'

function ClothesDetail() {
    const { clothId } = useParams();
    const { data } = ProductsData;
    console.log(data);
    return (
        <>
            <Typography.Title>CLOTHES DETAILS</Typography.Title>
            <div className='secondContent'>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default ClothesDetail
