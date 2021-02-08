import React from "react";

import ShortProductCard from "../shortProductCard/ShortProductCard";
import "./relatedProduct.sass";

const RelatedProduct = () => {
  return (
    <div className="relatedProduct__wrapper">
      <h3 className="relatedProduct__title">Buy with this product</h3>
      <div className="relatedProduct__items__wrapper">
        <div className="relatedProduct__items">
          <ShortProductCard favorite={false} productId={0} />
          <ShortProductCard favorite={false} productId={0} />
          <ShortProductCard favorite={false} productId={0} />
          <ShortProductCard favorite={false} productId={0} />
          <ShortProductCard favorite={false} productId={0} />
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
