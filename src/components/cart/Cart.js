import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./cart.sass";
import arrowLeft from "../../img/icons/arrow line_left.svg";
import DeliveryAdress from "../deliveryAdress/DeliveryAdress";
import CartProducts from "./../cartProducts/CartProducts";
import Payment from "./../payment/Payment";
import DeliveryWidget from "./../deliveryWidget/DeliveryWidget";

function orderCoast(arr) {
  let allCoast = arr.reduce((accum, item) => {
    return accum + item.cartCount * item.price;
  }, 0);

  return allCoast.toFixed(2);
}

const Cart = ({ cart }) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let orderSumm = +orderCoast(cart);
  let total = +(orderSumm - 0.65 + 0.18).toFixed(2);

  return (
    <div className="cart__wrapper">
      <div
        className={`cart__header ${scroll < 10 ? "" : "cart__header__scroll"}`}
      >
        <h2 className="cart__title">Cart</h2>
        <NavLink to="/">
          <button className="return__button">
            <img src={arrowLeft} alt="back" />
          </button>
        </NavLink>
      </div>
      <div className={`cart__body`}>
        <DeliveryAdress />
        <CartProducts products={cart} />
        <Payment orderSumm={orderSumm} total={total} />
      </div>
      <DeliveryWidget total={total} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartProducts,
  };
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(Cart);
