import {
  TOGGLE_FAVORITE,
  CART_ADD_PRODUCT,
  CART_DELETE_PRODUCT,
} from "../actions/actionTypes";

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
      let arr = state.allProducts.map((item) => {
        if (item.id === action.payload) {
          item.favorite = !item.favorite;
        }
        return item;
      });
      return {
        ...state,
        allProducts: arr,
      };
    case CART_ADD_PRODUCT:
      let add = state.allProducts.map((item) => {
        if (item.id === action.payload) {
          item.cartCount = item.cartCount + 1;
        }
        return item;
      });

      return {
        ...state,
        allProducts: add,
      };
    case CART_DELETE_PRODUCT:
      let del = state.allProducts.map((item) => {
        if (item.id === action.payload) {
          item.cartCount = item.cartCount - 1;
        }
        return item;
      });

      return {
        ...state,
        allProducts: del,
      };
    default:
      return state;
  }
}
