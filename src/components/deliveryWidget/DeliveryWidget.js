import React from "react";
import PropTypes from "prop-types";

import "./deliveryWidget.sass";
import deliveryIcon from "../../img/icons/deliveryIcon.svg";

const DeliveryWidget = ({ total }) => {
  return (
    <div className="deliveryWidget__wraper">
      <div className="deliveryWidget__icon__wrapper">
        <img src={deliveryIcon} alt="delivery" />
      </div>
      <div className="deliveryWidget__duration">
        <div className="deliveryWidget__tittle">Delivery:</div>
        <div className="deliveryWidget__value">25-30 min</div>
      </div>
      <div className="deliveryWidget__duration">
        <div className="deliveryWidget__tittle">Total:</div>
        <div className="deliveryWidget__value">£ {total}</div>
      </div>
      <button className="deliveryWidget__button">Checkout </button>
    </div>
  );
};

DeliveryWidget.propTypes = {
  total: PropTypes.number.isRequired,
};

export default DeliveryWidget;
