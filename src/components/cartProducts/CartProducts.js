import React from "react";
import PropTypes from "prop-types";

import BasketProductCard from "../basketProductCard/BasketProductCard";
import "./cartProducts.sass";

const CartProducts = ({ products }) => {
  return (
    <div className="cartProducts__wrapper">
      <div className="cartProducts__title"> 2 items</div>
      {products.map((product) => {
        return (
          <BasketProductCard
            product={product}
            productId={product.id}
            key={product.id}
          />
        );
      })}
    </div>
  );
};

CartProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CartProducts;
