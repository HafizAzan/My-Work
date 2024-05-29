import React from 'react'

function ImageDetailcomponent({ product, alt }) {
    return (
        <>
            <div className='smallImages'>
                <img src={product.image} alt={alt} />
                <img src={product.image} alt={alt} />
                <img src={product.image} alt={alt} />
            </div>
            <div className='largeImage'>
                <img src={product.image} alt="Main cloth" />
            </div>
        </>
    )
}

export default ImageDetailcomponent;
