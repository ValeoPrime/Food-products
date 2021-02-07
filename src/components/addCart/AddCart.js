import React from "react";
import "./addCart.sass";
import addCard from "../../img/icons/addCard.svg";
import deleteCard from "../../img/icons/deleteCard.svg";
import { connect } from "react-redux";
import {
  cartAddProduct,
  cartDeleteProduct,
} from "../../store/actions/cartActions";

const AddCart = ({ count = 0, productId, cartAddProduct, cartDeleteProduct }) => {
  return (
    <div className="addCard__wrapper">
      {count == 0 ? (
        "add"
      ) : (
        <>
          <button
            className="deleteCard__button"
            onClick={(e) => cartDeleteProduct(e)}
          >
            <img src={deleteCard} alt="delete" id={productId} />
          </button>
          <div className="addCard__counter"> {count} </div>
        </>
      )}

      <button className="addCard__button" onClick={(e) => cartAddProduct(e)}>
        <img src={addCard} alt="add" id={productId} />
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartAddProduct: (id) => dispatch(cartAddProduct(id)),
    cartDeleteProduct: (id) => dispatch(cartDeleteProduct(id)),
  };
};

export default connect(null, mapDispatchToProps)(AddCart);
