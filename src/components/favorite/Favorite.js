import React from 'react'
import './favorite.sass'
import notFavor from '../../img/icons/notFavorites.svg'

const Favorite = () => {
    return (
        <div className='favorite__wrapper'>
            <button className='favorite__button'>
                <img src={notFavor} alt='favorite'/>
            </button>
        </div>
    )
}

export default Favorite
