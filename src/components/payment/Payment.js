import React from "react";
import PropTypes from "prop-types";

import "./payment.sass";

const Payment = ({ orderSumm, total }) => {
  return (
    <div className="payment__wraper">
      <h3 className="payment__title">Payment</h3>
      <div className="payment__promoCode__wraper">
        <label className="payment__promoCode--succes">
          <input type="text" placeholder="Promocode" />
        </label>
      </div>
      <div className="payment__total__wraper">
        <div className="payment__item">
          <div className="payment__item__title">Order:</div>
          <div className="payment__item__count">£ {orderSumm}</div>
        </div>
        <div className="payment__item">
          <div className="payment__item__title">Delivery</div>
          <div className="payment__item__count">£ 0,18</div>
        </div>
        <div className="payment__item promo">
          <div className="payment__item__title">Promocode</div>
          <div className="payment__item__count">- £ 0,65</div>
        </div>
        <hr />
        <div className="payment__total">
          <div className="payment__total__title">Total:</div>
          <div className="payment__total__count">£ {total}</div>
        </div>
      </div>
    </div>
  );
};

Payment.propTypes = {
  orderSumm: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Payment;
