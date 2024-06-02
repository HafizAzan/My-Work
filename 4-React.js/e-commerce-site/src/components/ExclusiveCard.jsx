import React from 'react'
import CustomButton from './CustomButton'
import { ImageUrl } from '../Utils/ImageUrl'
import { Input } from 'antd'
import { Link } from 'react-router-dom'
import { UNATHENTICATED_URL } from '../Utils/Route.define'

function ExclusiveCard({ Title, paragraph, show }) {
    return (
        <>
            {show == false ? (
                <div className='ExulisiveCard'>
                    <div className='Shelter'>
                        <div className='shelterOpt'>
                            <h1>{Title}</h1>
                            <p>{paragraph}</p>
                            <Link to={UNATHENTICATED_URL.WOMEN}>
                                <CustomButton type="primary" className="btn4" btnName={<p> Check Now</p>} />
                            </Link>
                        </div>
                        <div className='div3'>
                            <img src={ImageUrl.women_11} alt="" />
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
