import { CART_ADD_PRODUCT, CART_DELETE_PRODUCT } from "../actions/actionTypes";
import {changeCount} from '../../helpers/helpers'

const initialState = {
  cartProducts: [
    {
      id: 1548287,
      title: "Just Milk Semi-Skimmed 6 x 1L (Case of 2)",
      pricePerUnit: 1.59,
      price: 1.59,
      cartCount: 3,
      favorite: false,
      special: null
    },
    {
      id: 1548237,
      title: "Just Juis Semi-Skim 8 x 1L (Case of 1)",
      pricePerUnit: 2.59,
      price: 2.59,
      cartCount: 5,
      favorite: false,
      special:"Price has been changed: (£4.59)"
    },
    {
      id: 1548217,
      title: "Just Juis Semi-Skim 8 x 1L (Case of 1)",
      pricePerUnit: 6.59,
      price: 4.59,
      cartCount: 2,
      favorite: false,
      special:"Special offer: -20%"
    },
  ],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      return {
        ...state,
        cartProducts: changeCount(state.cartProducts,action.payload, 1),
      };
    case CART_DELETE_PRODUCT:
      return {
        ...state,
        cartProducts: changeCount(state.cartProducts,action.payload, -1),
      };
    default:
      return state;
  }
}
