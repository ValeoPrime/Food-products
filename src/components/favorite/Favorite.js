import React from 'react'
import './favorite.sass'
import notFavor from '../../img/icons/notFavorites.svg'
import favor from '../../img/icons/FavoriteBlack.svg'


const Favorite = ({favorite, productId, changeFavorite}) => {

    return (
        <div className='favorite__wrapper'>
            <button className='favorite__button' onClick={(e)=> changeFavorite(e)} >
                <img src={favorite ? favor : notFavor} alt='favorite' id = {productId}/>
            </button>
        </div>
    )
}


export default Favorite
