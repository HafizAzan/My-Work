import React, { useMemo } from 'react'
import { useQuery } from 'react-query';
import { AllProducts } from '../apiServices/Products.service';

function CustomCard({ image, price }) {
    const { data: productsData } = useQuery("Products", () => AllProducts.getAllProducts());

    const lastFourProducts = useMemo(() => {
        return productsData?.data.slice(16, 21);
    }, [productsData]);

    console.log(lastFourProducts);
    return (
        <>
            {lastFourProducts?.length > 0 && lastFourProducts.map((single) => {
                return (
                    <div className='card1'>
                        <img src={single.image} alt="" />
                        <div className='underCard1'>
                            <p>{single.title}</p>
                            <h5><span>$</span>{single.price}</h5>
                        </div>
                    </div>)
            })}

        </>
    )
}

export default CustomCard
