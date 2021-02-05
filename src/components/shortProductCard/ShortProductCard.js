import React from "react";
import "./shortProductCard.sass";
import Favorite from "./../favorite/Favorite";
import AddCart from "../addCart/AddCart";
import milk from "../../img/contentImg/milk.png";

const ShortProductCard = () => {
  return (
    <div className="shortproduct__card">
      <Favorite />
      <div className="shortproduct__cardImg__wrapper">
        <img className="shortproduct__card__img" src={milk} alt="product" />
      </div>
      <h3 className="shortproduct__card__title">
        Just Milk Semi-Skimmed 6 x 1L (Case of 2)
      </h3>
      <div className="shortpricePerUnit">1 pc / £1.59</div>
      <div className="shortproduct__card__price__wrapper">
        <div className="shortproduct__card__price">£1.59</div>
        <AddCart />
      </div>
    </div>
  );
};

export default ShortProductCard;
