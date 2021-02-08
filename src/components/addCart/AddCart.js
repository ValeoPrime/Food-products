import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./addCart.sass";
import addCard from "../../img/icons/addCard.svg";
import deleteCard from "../../img/icons/deleteCard.svg";
import {
  cartAddProduct,
  cartDeleteProduct,
} from "../../store/actions/cartActions";

const AddCart = ({
  count = 0,
  productId,
  cartAddProduct,
  cartDeleteProduct,
}) => {
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

AddCart.propTypes = {
  count: PropTypes.number,
  productId: PropTypes.number.isRequired,
  cartAddProduct: PropTypes.func,
  cartDeleteProduct: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(AddCart);
