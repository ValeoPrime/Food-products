import React from "react";
import "./moreProductInformation.sass";
import Ingridients from './../ingridients/Ingridients';
import OtherInformation from './../otherInformation/OtherInformation';
import EnergyValue from "../energyValue/EnergyValue";

const MoreProductInformation = () => {
  return (
    <div className="productInformation__wrapper">
      <h3 className="productInformation__title">Nutrition</h3>
      <p className="productInformation__descr">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at
        egestas tempus duis egestas semper dolor morbi purus. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis
        egestas semper dolor morbi purus.
      </p>
      <ul className="productInformation__advantagesList">
        <li className="productInformation__advantagesItem">
          Lorem ipsum dolor sit amet
        </li>
        <li className="productInformation__advantagesItem">
          Consectetur adipiscing elit
        </li>
        <li className="productInformation__advantagesItem">
          Ultrices at egestas tempus
        </li>
        <li className="productInformation__advantagesItem">
          Duis egestas semper dolor morbi purus.
        </li>
      </ul>
      <hr />
      <EnergyValue/>
      <Ingridients/>
      <OtherInformation/>

    </div>
  );
};

export default MoreProductInformation;
