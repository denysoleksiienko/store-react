import { REQUESTED_PRODUCTS, REQUESTED_PRODUCTS_SUCCEEDED, REQUESTED_PRODUCTS_FAILED } from './actionTypes';

const initialState = {
  products: [],
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_PRODUCTS:
      return {
        products: [],
        error: false,
      };
    case REQUESTED_PRODUCTS_SUCCEEDED:
      return {
        products: action.products,
        error: false,
      };
    case REQUESTED_PRODUCTS_FAILED:
      return {
        products: [],
        error: true,
      };
    default:
      return state;
  }
};
