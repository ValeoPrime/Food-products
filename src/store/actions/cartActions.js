import {CART_ADD_PRODUCT, CART_DELETE_PRODUCT} from './actionTypes'


 export function cartAddProduct(e) {
    return {
        type: CART_ADD_PRODUCT,
        payload: +e.target.id
    }
}

export function cartDeleteProduct(e) {
    return {
        type: CART_DELETE_PRODUCT,
        payload: +e.target.id
    }
}