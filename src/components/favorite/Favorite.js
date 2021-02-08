import React from "react";
import PropTypes from "prop-types";

import "./favorite.sass";
import notFavor from "../../img/icons/notFavorites.svg";
import favor from "../../img/icons/FavoriteBlack.svg";

const Favorite = ({ favorite, productId, changeFavorite }) => {
  return (
    <div className="favorite__wrapper">
      <button className="favorite__button" onClick={(e) => changeFavorite(e)} disabled={!productId}>
        <img src={favorite ? favor : notFavor} alt="favorite" id={productId} />
      </button>
    </div>
  );
};

Favorite.propTypes = {
  favorite: PropTypes.bool.isRequired,
  productId: PropTypes.number.isRequired,
  changeFavorite: PropTypes.func,
};

export default Favorite;
