import React from 'react';
import { useParams } from 'react-router-dom';
import ImageDetailcomponent from '../components/ImageDetailcomponent';
import { useQuery } from 'react-query';
import { AllProducts } from '../apiServices/Products.service';
import WomenDetailImage from '../components/WomenDetailImage';

function RealClothesDetail() {
    const { WomenclothId } = useParams();

    const { data } = useQuery(["clothes", WomenclothId], () => AllProducts.getProductById(WomenclothId), {
        enabled: Boolean(WomenclothId)
    })
    const product = data?.data;
    return (
        <>
            <h1 className='hOne'>WOMEN CLOTHES DETAILS</h1>
            <div className='content'>
                {product ? (
                    <>
                        <WomenDetailImage product={product?.image} alt="Additional cloth 1" ></WomenDetailImage>
                    </>
                ) : (
                    <WomenDetailImage product={null} alt="No cloth Available" ></WomenDetailImage>
                )
                }
                <div>
                </div>
            </div>
        </>
    );
}

export default RealClothesDetail;
