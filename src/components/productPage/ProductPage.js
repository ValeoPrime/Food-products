import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./productPage.sass";
import { toggleFavorite } from "../../store/actions/productsActions";
import ProductCard from "./../productCard/ProductCard";
import RelatedProduct from "./../relatedProducts/RelatedProduct";
import MoreProductInformation from "./../moreProductInformation/MoreProductInformation";

const ProductPage = ({ products, toggleFavorite }) => {
  const changeFavorite = (e) => {
    toggleFavorite(e.target.id);
  };

  return (
    <div className="productPage__wraper">
      {products.map((product) => {
        return (
          <div key={1}>
            <ProductCard product={product} changeFavorite={changeFavorite} />
            <RelatedProduct />
            <MoreProductInformation nutritions = {product.nutritions}/>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.allProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (id) => dispatch(toggleFavorite(id)),
  };
};

ProductPage.propTypes = {
  products: PropTypes.array.isRequired,
  toggleFavorite: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
