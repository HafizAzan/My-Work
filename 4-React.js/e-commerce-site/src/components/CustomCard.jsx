import React from 'react'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
import { UNATHENTICATED_URL } from '../Utils/Route.define'

function CustomCard({ src, Title, price, women, singleId }) {

    return (
        <>
            {women === true ?
                (
                    <div className='card1' style={{
                        transition: "all ease 0.8s",
                    }}>
                        <Link to={UNATHENTICATED_URL.WOMEN_DETAIL.replace(":WomenclothId", singleId)}>
                            <img src={src} alt="" />
                        </Link>
                        <div className='underCard1'>
                            <p>{Title}</p>
                            <h5><span>$</span>{price}</h5>
                        </div>
                    </div>

                ) : (
                    <div className='kidCard' data-aos="fade-up" style={{
                        transition: "all ease 0.8s",
                    }}>
                        <Link to={UNATHENTICATED_URL.POST_DETAIL.replace(":clothId", singleId)}>
                            <img src={src} alt="" />
                        </Link>
                        <div className='underCard1 underCard2'>
                            <p>{Title}</p>
                            <h5><span>$</span>{price}</h5>

                            <CustomButton
                                type="primary"
                                className="AddBtn"
                                btnName="Add To Card"
                                htmlType="submit"
                            />

                        </div>
                    </div >
                )
            }


        </>
    )
}

export default CustomCard
