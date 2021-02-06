import React from "react";
import "./deliveryAdress.sass";
import delAdress from '../../img/icons/delAdress.svg'

const DeliveryAdress = () => {
  return (
    <div className="deliveryAdress__wrapper">
      <h3 className="deliveryAdress__title">Delivery address</h3>
      <div className="deliveryAdress__inputs__wrapper">
        <label>
          <input
            className="deliveryAdress__town delivery__input"
            type="text"
            placeholder="Town"
          />
        </label>

        <div className="deliveryAdress__inner__wrapper">
          <input
            className="deliveryAdress__flat delivery__input"
            type="text"
            placeholder="Flat"
          />
          <input
            className="deliveryAdress__floor delivery__input"
            type="text"
            placeholder="Floor"
          />
          <input
            className="deliveryAdress__block delivery__input"
            type="text"
            placeholder="Block"
          />
        </div>
      </div>
      <button className="deliveryAdress__delete">
          <img src={delAdress}/>
      </button>
    </div>
  );
};

export default DeliveryAdress;
