import React from "react";
import "./addCart.sass";
import addCard from "../../img/icons/addCard.svg";
import deleteCard from "../../img/icons/deleteCard.svg";

const AddCart = () => {
    let count = 0
  return (
    <div className="addCard__wrapper">
        {count != 0 ? 'add' : ''}
      <button className="deleteCard__button">
        <img src={deleteCard} alt="delete" />
      </button>
      <div className="addCard__counter"> 2 </div>
      <button className="addCard__button">
        <img src={addCard} alt="add" />
      </button>
    </div>
  );
};

export default AddCart;
