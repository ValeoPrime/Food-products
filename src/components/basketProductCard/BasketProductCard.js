import React from "react";
import AddCart from "../addCart/AddCart";
import "./basketProductCard.sass";
import milk from "../../img/contentImg/milk.png";
import { NavLink } from "react-router-dom";

const BasketProductCard = () => {
  return (
    <div className="basketProduct__card">
      <div className="basketProduct__cardImg__wrapper">
        <img className="basketProduct__card__img" src={milk} alt="product" />
      </div>
      <div className="basketProduct__inner__wrapper">
        <h3 className="basketProduct__card__title">
          Just Milk Semi-Skimmed 6 x 1L (Case of 2)
        </h3>
        <div className="basketProduct__price__wrapper">
          <div className="basketProduct__card__price">£1.59</div>
          <div className="basketPricePerUnit">1 pc / £1.59</div>
        </div>
      </div>

      <div className="basketProduct__card__wrapper">
        <NavLink  className="basketProduct__card__details" to='/product'>Details</NavLink>
        <AddCart />
      </div>
    </div>
  );
};

export default BasketProductCard;
