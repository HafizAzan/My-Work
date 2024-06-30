import React from 'react'

function WomenDetailImage({ alt, product }) {
    return (
        <>
            <div className='smallImages small'>
                <img src={product} alt={alt} />
                <img src={product} alt={alt} />
                <img src={product} alt={alt} />
            </div>
            <div className='largeImage big'>
                <img src={product} alt="Main cloth" />
            </div>
        </>
    )
}

export default WomenDetailImage
