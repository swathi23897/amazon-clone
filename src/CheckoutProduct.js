import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProduct({ id, image, title, price, rating }) {

    const [{basket},dispatch] = useStateValue()
    const removeFromBasket=()=>{
     
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className="checkoutproduct">
            <img className='checkoutProduct__image' src={image}></img>
            <div className='checkoutProduct__info' >
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price' >{price}</p>
                <small>$</small>
                <strong>{price}</strong>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
