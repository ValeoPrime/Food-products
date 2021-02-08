import {
  TOGGLE_FAVORITE,
  CART_ADD_PRODUCT,
  CART_DELETE_PRODUCT,
} from "../actions/actionTypes";
import {changeCount, toggleFavorite} from '../../helpers/helpers'

const initialState = {
  allProducts: [
    {
      id: 1548237,
      title: "Just Milk Semi-Skimmed 6 x 1L (Case of 2)",
      pricePerUnit: 1.59,
      price: 1.59,
      cartCount: 1,
      discont: 20,
      favorite: false,
      nutritions: [
        {
          value: "28",
          unit: "Kkal.",
          dailyRate: "4% RI",
        },
        {
          value: "1.3 g",
          unit: "Proteins",
          dailyRate: "10% RI",
        },
        {
          value: "0 g",
          unit: "Fats",
          dailyRate: "12% RI",
        },
        {
          value: "28",
          unit: "Сarbs",
          dailyRate: "10% RI",
        },
        {
          value: "6,4 mg",
          unit: "Niacin",
          dailyRate: "40% RI",
        },
        {
          value: "0,8 g",
          unit: "Vitamin B6",
          dailyRate: "57% RI",
        },
      ]
    },
  ],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return {
        ...state,
        allProducts: toggleFavorite(state.allProducts, action.payload),
      };
    case CART_ADD_PRODUCT:
      return {
        ...state,
        allProducts: changeCount(state.allProducts,action.payload, 1),
      };
    case CART_DELETE_PRODUCT:
      return {
        ...state,
        allProducts: changeCount(state.allProducts,action.payload, -1),
      };
    default:
      return state;
  }
}
