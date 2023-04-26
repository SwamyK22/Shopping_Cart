export const intialProductsState = [];
export const productsReducer = (state = intialProductsState, { type, payload }) => {
  switch (type) {
    case 'LOAD_PRODUCTS_SUCCESS':
      return payload;

    default:
      return state;
  }
};
