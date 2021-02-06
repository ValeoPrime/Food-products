import React from "react";
import "./payment.sass";

const Payment = () => {
  return (
    <div className="payment__wraper">
      <h3 className="payment__title">Payment</h3>
      <div className="payment__promoCode__wraper">
        <input type="text" placeholder="Promocode" />
      </div>
      <div className="payment__total__wraper">
        <div className="payment__item">
          <div className="payment__item__title">Order:</div>
          <div className="payment__item__count">£ 4</div>
        </div>
        <div className="payment__item">
          <div className="payment__item__title">Delivery</div>
          <div className="payment__item__count">£ 0,4</div>
        </div>
        <div className="payment__item promo">
          <div className="payment__item__title">Promocode</div>
          <div className="payment__item__count">- £ 0,4</div>
        </div>
        <hr />
        <div className="payment__total">
          <div className="payment__total__title">Total:</div>
          <div className="payment__total__count">£ 4,4</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
