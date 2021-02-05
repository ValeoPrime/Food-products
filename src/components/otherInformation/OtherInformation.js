import React from "react";
import "./otherInformation.sass";

const OtherInformation = () => {
  return (
    <div className="otherInformation__wrapper">
      <h3 className="otherInformation__title">Other</h3>
        <div className="otherInformation__item">
            <div className="otherInformation__item__title">Страна производства</div>
            <div className="otherInformation__item__descr">Россия</div>
        </div>
        <div className="otherInformation__item">
            <div className="otherInformation__item__title">Состав</div>
            <div className="otherInformation__item__descr">цельное молоко</div>
        </div>
        <div className="otherInformation__item">
            <div className="otherInformation__item__title">Срок годности</div>
            <div className="otherInformation__item__descr">12 дн.</div>
        </div>
        <div className="otherInformation__item">
            <div className="otherInformation__item__title">Изготовитель</div>
            <div className="otherInformation__item__descr">ОАО "Компания "Юнимилк"</div>
        </div>
        <div className="otherInformation__item">
            <div className="otherInformation__item__title">Жирность</div>
            <div className="otherInformation__item__descr">4.5 %</div>
        </div>
        <div className="otherInformation__item">
            <div className="otherInformation__item__title">Содержание лактозы</div>
            <div className="otherInformation__item__descr">обычное (более 1% лактозы)</div>
        </div>
        <div className="otherInformation__item">
            <div className="otherInformation__item__title">Витаминизированное/
обогащенное</div>
            <div className="otherInformation__item__descr">нет</div>
        </div>
    </div>
  );
};

export default OtherInformation;
