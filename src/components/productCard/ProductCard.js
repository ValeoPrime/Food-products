import React from "react";
import "./productCard.sass";
import milk from "../../img/contentImg/milk.png";
import Favorite from "../favorite/Favorite";
import AddCart from "./../addCart/AddCart";

const ProductCard = ({ product, changeFavorite }) => {

  return (
    <div className="product__card">
      <Favorite favorite={product.favorite} productId={product.id} changeFavorite={changeFavorite}/>
      <div className="product__cardImg__wrapper">
        <img className="product__card__img" src={milk} alt="product" />
      </div>
      <div className="product__cardDots__wrapper">
        <span className="dot active__dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <h3 className="product__card__title">{product.title}</h3>
      <div className="pricePerUnit">1 pc / £{product.pricePerUnit}</div>
      <div className="product__card__price__wrapper">
        <div className="product__card__price">£{product.price}</div>
        <AddCart count={product.cartCount} productId={product.id}/>
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



export default ProductCard
