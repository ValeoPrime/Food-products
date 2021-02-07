import React from "react";
import "./cart.sass";
import arrowLeft from "../../img/icons/arrow line_left.svg";
import { NavLink } from "react-router-dom";
import DeliveryAdress from "../deliveryAdress/DeliveryAdress";
import CartProducts from "./../cartProducts/CartProducts";
import Payment from "./../payment/Payment";
import DeliveryWidget from "./../deliveryWidget/DeliveryWidget";

const Cart = () => {
  return (
    <div className="cart__wrapper">
      <div className="cart__header">
        <h2 className="cart__title">Cart</h2>
        <NavLink to="/">
          <button className="return__button">
            <img src={arrowLeft} alt="back" />
          </button>
        </NavLink>
      </div>
      <div className="cart__body">
        <DeliveryAdress />
        <CartProducts />
        <Payment />
      </div>
      <DeliveryWidget />
    </div>
  );
};

export default Cart;
