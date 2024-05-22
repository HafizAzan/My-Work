import React from 'react'
import CustomButton from './CustomButton'

function MainContent({ image }) {
    return (
        <>
            <div className='mainContent'>
                <div className='div1'>
                    <p>NEW ARRIVALS ONLY</p>
                    <h1>new &#128075;<br /> collections <br /> for everyone.</h1>
                    <div>
                        <CustomButton btnName="latest Collection" type="primary" className="btnCollection" show={false} />
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
