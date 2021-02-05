import React from 'react'
import './productPage.sass'
import ProductCard from './../productCard/ProductCard';
import RelatedProduct from './../relatedProducts/RelatedProduct';
import MoreProductInformation from './../moreProductInformation/MoreProductInformation';
import Ingridients from './../ingridients/Ingridients';

const ProductPage = () => {
    return (
        <div className='productPage__wraper'>
            <ProductCard/>
            <RelatedProduct/>
            <MoreProductInformation/>

        </div>
    )
}

export default ProductPage
