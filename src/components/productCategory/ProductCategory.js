import React from "react";
import "./productCategory.sass";
import arrowLeft from "../../img/icons/arrow line_left.svg";
import ProductPage from "../productPage/ProductPage";
import { NavLink } from 'react-router-dom';

const ProductCategory = () => {
  return (
    <div>
      <div className="productCategory__header">
        <h2 className="productCategory__title">Milk & Cheese</h2>
        <NavLink to="/" className="link">
          <button className="return__button">
            <img src={arrowLeft} alt="back" />
          </button>
        </NavLink>
      </div>
      <ProductPage />
    </div>
  );
};

export default ProductCategory;
