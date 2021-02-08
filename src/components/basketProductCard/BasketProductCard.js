import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import AddCart from "../addCart/AddCart";
import "./basketProductCard.sass";
import milk from "../../img/contentImg/milk.png";

const BasketProductCard = ({ product, productId }) => {
  return (
    <div className="basketProduct__card">
      <div className="basketProduct__cardImg__wrapper">
        <img className="basketProduct__card__img" src={milk} alt="product" />
      </div>
      <div className="basketProduct__inner__wrapper">
        <h3 className="basketProduct__card__title">{product.title}</h3>
        <div className="basketProduct__price__wrapper">
          <div className="basketProduct__card__price">£{product.price}</div>
          <div className="basketPricePerUnit">
            1 pc / £{product.pricePerUnit}
          </div>
        </div>
      </div>

      <div className="basketProduct__card__wrapper">
        <NavLink className="basketProduct__card__details" to="/product">
          Details
        </NavLink>
        <AddCart count={product.cartCount} productId={productId} />
      </div>
    </div>
  );
};

BasketProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  productId: PropTypes.number.isRequired,
};

export default BasketProductCard;
