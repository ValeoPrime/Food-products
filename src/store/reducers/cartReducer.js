import { CART_ADD_PRODUCT, CART_DELETE_PRODUCT } from "../actions/actionTypes";

const initialState = {
  cartProducts: [
    {
      id: 1548287,
      title: "Just Milk Semi-Skimmed 6 x 1L (Case of 2)",
      pricePerUnit: 1.59,
      price: 1.59,
      cartCount: 3,
      favorite: false,
    },
    {
      id: 1548237,
      title: "Just Juis Semi-Skim 8 x 1L (Case of 1)",
      pricePerUnit: 2.59,
      price: 2.59,
      cartCount: 5,
      favorite: false,
    },
  ],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      let add = state.cartProducts.map((item) => {
        if (item.id === action.payload) {
          item.cartCount = item.cartCount + 1;
        }
        return item;
      });

      return {
        ...state,
        cartProducts: add,
      };
    case CART_DELETE_PRODUCT:
      let del = state.cartProducts.map((item) => {
        if (item.id === action.payload) {
          item.cartCount = item.cartCount - 1;
        }
        return item;
      });

      return {
        ...state,
        cartProducts: del,
      };
    default:
      return state;
  }
}
