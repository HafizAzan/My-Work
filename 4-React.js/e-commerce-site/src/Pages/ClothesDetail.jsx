import { Typography } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import ImageDetailcomponent from '../components/ImageDetailcomponent';
import { ImageUrl } from '../Utils/ImageUrl';
import CustomButton from '../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../Redux/Store';
import ProductsData from '../Api.json';
import Swal from 'sweetalert2';
function ClothesDetail() {
    const items = useSelector((state) => state?.counter);
    const dispatch = useDispatch()
    const incrementHandler = (product) => {
        const productId = product?.id
        const findProducts = items.some((data) => data?.id === productId);
        if (findProducts) {
            Swal.fire({
                icon: "warning",
                text: "This Product Have Already Exist.",
            });
        } else {
            dispatch(increment(product))
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Item has been Add Successfully",
                showConfirmButton: false,
                timer: 1200
            });
        }
    }

    const { clothId } = useParams();

    if (!ProductsData.data) {
        return <Typography.Title>No Data Available</Typography.Title>;
    }

    const product = ProductsData.data.find((item) => item.id.toString() === clothId);

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
                <div className='rightcontent'>
                    <div className='seprete'>
                        <p>{product?.name}</p>
                    </div>
                    <div id='image'>
                        <img src={ImageUrl.star} alt="" />
                        <img src={ImageUrl.star} alt="" />
                        <img src={ImageUrl.star} alt="" />
                        <img src={ImageUrl.star} alt="" />
                    </div>
                    <h2>${product?.price}</h2>
                    <div className='Shouldflex'>
                        <p>Category : </p>
                        <p>{product?.category}</p>
                    </div>
                    <div className='Shouldflex'>
                        <p>Tag : </p>
                        <p>{product?.tag}</p>
                    </div>
                    <div className='slectSize'>
                        <h3>Select Size</h3>
                        <div className='tags'>
                            <CustomButton btnName="S" />
                            <CustomButton btnName="M" />
                            <CustomButton btnName="L" />
                            <CustomButton btnName="XL" />
                            <CustomButton btnName="XXL" />
                        </div>
                        <CustomButton
                            type="primary"
                            className="AddBtn AddBtn1"
                            btnName="Add To Card"
                            htmlType="submit"
                            onClick={() => incrementHandler(product)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClothesDetail;
