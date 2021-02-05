import React from "react";
import "./energyValue.sass";

const EnergyValue = () => {
  const arr = [
    {
      value: "28",
      unit: "Kkal.",
      dailyRate: "4% RI",
    },
    {
      value: "1.3 g",
      unit: "Proteins",
      dailyRate: "10% RI",
    },
    {
      value: "0 g",
      unit: "Fats",
      dailyRate: "12% RI",
    },
    {
      value: "28",
      unit: "Сarbs",
      dailyRate: "10% RI",
    },
    {
      value: "6,4 mg",
      unit: "Niacin",
      dailyRate: "40% RI",
    },
    {
      value: "0,8 g",
      unit: "Vitamin B6",
      dailyRate: "57% RI",
    },
  ];
  return (
    <div className="energyValue__wrapper">
      <div className="energyValue__itemWrapper">
        {arr.map((item, i) => {
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

export default EnergyValue;
