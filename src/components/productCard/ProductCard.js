import React from "react";
import "./productCard.sass";
import milk from "../../img/contentImg/milk.png";
import Favorite from "../favorite/Favorite";
import AddCart from './../addCart/AddCart';

const ProductCard = () => {
  return (
    <div className="product__card">
      <Favorite />
      <div className="product__cardImg__wrapper">
        <img className="product__card__img" src={milk} alt="product" />
      </div>
      <div className="product__cardDots__wrapper">
        <span className="dot active__dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <h3 className="product__card__title">
        Just Milk Semi-Skimmed 6 x 1L (Case of 2)
      </h3>
      <div className="pricePerUnit">1 pc / £1.59</div>
      <div className="product__card__price__wrapper">
        <div className="product__card__price">£1.59</div>
        <AddCart/>
      </div>

      <hr />
      <ul className="product__moreInformation__list">
        <li className="product__moreInformation__item">
          <a>Nutrition</a>
        </li>
        <li className="product__moreInformation__item">
          <a>Ingredients</a>
        </li>
        <li className="product__moreInformation__item">
          <a>Other</a>
        </li>
      </ul>
    </div>
  );
};

export default ProductCard;
