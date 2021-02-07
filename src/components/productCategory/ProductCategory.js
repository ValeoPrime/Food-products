import React,{useState, useEffect} from "react";
import "./productCategory.sass";
import arrowLeft from "../../img/icons/arrow line_left.svg";
import ProductPage from "../productPage/ProductPage";
import { NavLink } from 'react-router-dom';

const ProductCategory = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className={`productCategory__header ${scroll < 10 ? "" : "productCategory__scroll"}`}>
        <h2 className="productCategory__title">Milk & Cheese</h2>
        <NavLink to="/" className="link">
          <button className="return__button">
            <img src={arrowLeft} alt="back" />
          </button>
        </NavLink>
      </div>
      <ProductPage />
    </div>
  );
};


export default ProductCategory;
