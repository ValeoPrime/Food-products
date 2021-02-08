export const changeCount = (arr, payload, count) => {
  return arr.map((item) => {
    if (item.id === payload) {
      item.cartCount = item.cartCount + count;
    }
    return item;
  });
};

export const toggleFavorite = (arr, payload) => {
  return arr.map((item) => {
    if (item.id === payload) {
      item.favorite = !item.favorite;
    }
    return item;
  });
};
