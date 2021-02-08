import React from "react";
import PropTypes from 'prop-types'

import "./energyValue.sass";

const EnergyValue = ({nutritions}) => {
  return (
    <div className="energyValue__wrapper">
      <div className="energyValue__itemWrapper">
        {nutritions.map((item, i) => {
          return (
            <div className="energyValue__item" key={i}>
              <div className="energyValue__value">{item.value}</div>
              <div className="energyValue__unit">{item.unit}</div>
              <div className="energyValue__dailyRate">{item.dailyRate}</div>
            </div>
          );
        })}
      </div>

      <button className="energyValue__button">Hide</button>
    </div>
  );
};

EnergyValue.propTypes = {
  nutritions: PropTypes.array.isRequired
}

export default EnergyValue;
