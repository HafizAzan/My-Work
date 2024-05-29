import { Typography } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsData from '../Api.json';
import ImageDetailcomponent from '../components/ImageDetailcomponent';

function ClothesDetail() {
    const { clothId } = useParams();

    if (!ProductsData.data) {
        console.error('ProductsData does not have a "data" property.');
        return <Typography.Title>No Data Available</Typography.Title>;
    }

    const product = ProductsData.data.find((item) => item.id.toString() === clothId);

    console.log(clothId, "clothId");
    console.log(product, "product");
    console.log(ProductsData.data, "ProductsData");

    return (
        <>
            <h1 className='hOne'>CLOTHES DETAILS</h1>
            <div className='content'>
                {product ? (
                    <>
                        <ImageDetailcomponent product={product} alt="Additional cloth 1" ></ImageDetailcomponent>
                    </>
                ) : (
                    <>
                        <ImageDetailcomponent product={product} alt="No cloth Available" ></ImageDetailcomponent>
                    </>
                )}
                <div>

                </div>
            </div>
        </>
    );
}

export default ClothesDetail;
