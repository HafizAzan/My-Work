import React, { useEffect, useState } from 'react'
import CustomButton from '../components/CustomButton'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, removeAll } from '../Redux/Store';
import Swal from 'sweetalert2'
import Loader from './Loader';

function Productsdetail() {
    const product = useSelector((state) => state?.counter);
    const [quantities, setQuantities] = useState(product.map(() => 1));

    const [loader, setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
    }, [])
    setTimeout(() => {
        setLoader(false)
    }, 2000);


    const noLessOne = (index, event) => {
        const newValue = event.target.value;
        const newQuantities = [...quantities];
        if (newValue >= 1) {
            newQuantities[index] = newValue;
            setQuantities(newQuantities);
        }
    }

    const getTotalPrice = () => {
        return product.reduce((total, singleItem, index) => {
            return total + singleItem.price * quantities[index];
        }, 0);
    }


    const dispatch = useDispatch()
    const RemoveBtn = (products) => {
        const productId = products?.id;
        Swal.fire({
            title: "Do you want to Delete This item?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(decrement(productId))
                Swal.fire("Deleted!", "", "success");
            }
        });
    }

    const RemoveBtnALL = () => {
        Swal.fire({
            title: "Do you want to Checkout This item?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeAll())
                Swal.fire("Checkout!", "", "success");
            }
        });
    }

    return (
        <div className='seccontent'>
            {loader === true ? <Loader /> : null}
            <h1 id='h1'>Product Details</h1>
            <div className='box'>
                {product?.length > 0 ? product?.map((singleItem, index) => {
                    return (
                        <div className='flexHai' key={singleItem.id}>
                            <img src={singleItem?.image} alt="" />
                            <div className='mar'>
                                <span id='span'>{singleItem?.category} Clothes</span>
                                <h3 id='h3'><span>$</span>{singleItem?.price}</h3>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantities[index]}
                                    onChange={(e) => noLessOne(index, e)}
                                />
                                <CustomButton btnName="Remove" type="primary" className="btnRemove" onClick={() => RemoveBtn(singleItem)} />
                            </div>
                        </div>
                    )
                }) : (
                    <div style={{
                        width: "100%",
                        height: "31vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <h1 style={{ color: "purple", fontWeight: "400", fontSize: "50px" }}>Your Task Is Empty </h1>
                    </div>
                )}
            </div>
            <div id='oneH'>
                <strong >Total ${getTotalPrice()}</strong>
                <CustomButton btnName="Checkout" type="primary" className="btnCheckout" onClick={() => RemoveBtnALL()} />
            </div>
        </div>
    )
}

export default Productsdetail;
