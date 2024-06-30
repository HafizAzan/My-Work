import React from 'react'
import CustomButton from './CustomButton'
import { useNavigate } from 'react-router-dom';
import { UNATHENTICATED_URL } from '../Utils/Route.define';

function MainContent({ image }) {
    const navigate = useNavigate()
    return (
        <>
            <div className='mainContent'>
                <div className='div1'>
                    <p>NEW ARRIVALS ONLY</p>
                    <h1>new &#128075;<br /> collections <br /> for everyone.</h1>
                    <div>
                        <CustomButton btnName="latest Collection" type="primary" className="btnCollection" show={false} onClick={() => navigate(UNATHENTICATED_URL.WOMEN)} />
                    </div>
                </div>
                <div className='div2'>
                    <img className='img3' src={image} />
                </div>
            </div>
        </>
    )
}

export default MainContent;
