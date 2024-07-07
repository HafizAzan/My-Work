import React, { useEffect, useState } from 'react'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
import { UNATHENTICATED_URL } from '../Utils/Route.define'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../Redux/Store'
import Swal from 'sweetalert2'
import CustomSkeletonLoader from './CustomSkeleton'

function CustomCard({ lastFourProducts, Data }) {
    const dispatch = useDispatch()
    const product = useSelector((state) => state?.counter);

    const [loader, setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
    }, [])
    setTimeout(() => {
        setLoader(false)
    }, 6000);


    const incrementHandler = (singleId) => {
        const productId = singleId?.id;
        const findProduct = product.some((item) => item?.id === productId);
        if (findProduct) {
            Swal.fire({
                icon: "warning",
                text: "This Product Have Already Exist.",
            });
        } else {
            dispatch(increment(singleId))
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Item has been Add Successfully",
                showConfirmButton: false,
                timer: 1200
            });
        }
    }
    return (
        <>
            {lastFourProducts?.length > 0 && lastFourProducts.map((single) => {
                return (
                    <div className='card1' style={{
                        transition: "all ease 0.8s",
                    }}>
                        <Link to={UNATHENTICATED_URL.POST_DETAIL.replace(":clothId", single?.id)}>
                            <img src={single?.image} alt="" />
                        </Link>
                        <div className='underCard1'>
                            <p>{single?.name}</p>
                            <h5><span>$</span>{single?.price}</h5>
                        </div>
                    </div>
                )
            })}

            <>

                {Data && Data.map((single) => {
                    return (
                        <div className='kidCard' data-aos="fade-up" style={{
                            transition: "all ease 0.8s",
                        }}>
                            <Link to={UNATHENTICATED_URL.POST_DETAIL.replace(":clothId", single.id)}>
                                <img src={single.image} alt="" />
                            </Link>
                            <div className='underCard1 underCard2'>
                                <p>{single.name}</p>
                                <h5><span>$</span>{single.price}</h5>

                                <CustomButton
                                    type="primary"
                                    className="AddBtn"
                                    btnName="Add To Card"
                                    htmlType="submit"
                                    onClick={() => incrementHandler(single)}
                                />

                            </div>
                        </div >
                    )
                })}
            </>


        </>
    )
}

export default CustomCard
