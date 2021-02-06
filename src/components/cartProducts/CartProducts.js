import React from 'react'
import BasketProductCard from '../basketProductCard/BasketProductCard'
import './cartProducts.sass'

const CartProducts = () => {
    return (
        <div className='cartProducts__wrapper'>
            <div className='cartProducts__title'> 2 items</div>
            <BasketProductCard/>
            <BasketProductCard/>
        </div>
    )
}

export default CartProducts
