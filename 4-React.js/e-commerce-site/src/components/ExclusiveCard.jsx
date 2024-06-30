import React from 'react'
import CustomButton from './CustomButton'
import { ImageUrl } from '../Utils/ImageUrl'
import { Input } from 'antd'
import { Link } from 'react-router-dom'
import { UNATHENTICATED_URL } from '../Utils/Route.define'

function ExclusiveCard({ Title, paragraph, show, image, className, showbtnho, id, classs }) {
    return (
        <>
            {show == false ? (
                <div className='ExulisiveCard'>
                    <div className='Shelter'>
                        <div className={classs}>
                            <h1>{Title}</h1>
                            <p>{paragraph}</p>
                            <Link to={UNATHENTICATED_URL.WOMEN}>
                                {showbtnho === true ? <CustomButton type="primary" className={className || "btn4"} btnName="Check Now" /> : <></>}
                            </Link>
                        </div>
                        <div id={id}>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>

            ) : (

                <div className='ExulisiveCard ExulisiveCard1'>
                    <div className='Shelter shelter5'>
                        <div className='shelterOpt shelterOpt1'>
                            <h1>{Title}</h1>
                            <p>{paragraph}</p>
                        </div>
                        <div className='div4 div5'>
                            <Input placeholder='Enter Your Email'></Input>
                            <CustomButton type="primary" className="btn5" btnName="Subscribe" />
                        </div>
                    </div>
                </div>

            )}

        </>
    )
}

export default ExclusiveCard
