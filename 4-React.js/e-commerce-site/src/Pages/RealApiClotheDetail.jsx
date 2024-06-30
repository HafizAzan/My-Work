import React from 'react';
import { useParams } from 'react-router-dom';
import ImageDetailcomponent from '../components/ImageDetailcomponent';
import { useQuery } from 'react-query';
import { AllProducts } from '../apiServices/Products.service';
import WomenDetailImage from '../components/WomenDetailImage';
import { ImageUrl } from '../Utils/ImageUrl';
import CustomButton from '../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../Redux/Store';
import Swal from 'sweetalert2';

function RealClothesDetail() {
    const items = useSelector((state) => state?.counter);
    const dispatch = useDispatch()
    const incrementHandler = (data) => {
        const productId = data?.id;
        const findsProduct = items.some((data) => data?.id === productId);
        if (findsProduct) {
            Swal.fire({
                icon: "warning",
                text: "This Product Have Already Exist.",
            });
        }
        else {
            dispatch(increment(data))
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Item has been Add Successfully",
                showConfirmButton: false,
                timer: 1200
            });
        }
    }
    const { WomenclothId } = useParams();

    const { data } = useQuery(["clothes", WomenclothId], () => AllProducts.getProductById(WomenclothId), {
        enabled: Boolean(WomenclothId)
    })
    const product = data?.data;

    return (
        <>
            <h1 className='hOne' id="hOne">WOMEN CLOTHES DETAILS</h1>
            <div className='content content1'>
                {product ? (
                    <>
                        <WomenDetailImage product={product?.image} alt="Additional cloth 1" ></WomenDetailImage>
                    </>
                ) : (
                    <WomenDetailImage product={null} alt="No cloth Available" ></WomenDetailImage>
                )
                }
                <div className='rightcontent'>
                    <div className='seprete seprete1'>
                        <p>{product?.title}</p>
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
                        <p>{product?.tag ?? "Modern Latest Design For Women"}</p>
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
                            onClick={() => incrementHandler(data)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RealClothesDetail;
