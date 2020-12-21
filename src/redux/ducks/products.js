import { call, put } from 'redux-saga/effects';
import { PRODUCTS_URL } from 'constants/api';

export const REQUESTED_PRODUCTS = 'REQUESTED_PRODUCTS';
export const REQUESTED_PRODUCTS_SUCCEEDED = 'REQUESTED_PRODUCTS_SUCCEEDED';
export const REQUESTED_PRODUCTS_FAILED = 'REQUESTED_PRODUCTS_FAILED';
export const FETCHED_PRODUCTS = 'FETCHED_PRODUCTS';

const initialState = {
  products: [],
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_PRODUCTS:
      return {
        ...state,
        products: [],
        error: false,
      };
    case REQUESTED_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        products: action.products,
        error: false,
      };
    case REQUESTED_PRODUCTS_FAILED:
      return {
        ...state,
        products: [],
        error: true,
      };
    default:
      return state;
  }
};

export const requestProducts = () => ({ type: REQUESTED_PRODUCTS });
export const requestProductsSuccess = (data) => ({ type: REQUESTED_PRODUCTS_SUCCEEDED, products: data });
export const requestProductsError = () => ({ type: REQUESTED_PRODUCTS_FAILED });
export const fetchProducts = () => ({ type: FETCHED_PRODUCTS });

export function* fetchProductsAsync() {
  try {
    yield put(requestProducts());
    const data = yield call(() => fetch(PRODUCTS_URL).then((response) => response.json()));
    yield put(requestProductsSuccess(data));
  } catch (error) {
    yield put(requestProductsError());
  }
}
