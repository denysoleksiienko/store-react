import {
  REQUESTED_PRODUCTS,
  REQUESTED_PRODUCTS_SUCCEEDED,
  REQUESTED_PRODUCTS_FAILED,
  FETCHED_PRODUCTS,
} from './actionTypes';

export const requestProducts = () => ({ type: REQUESTED_PRODUCTS });

export const requestProductsSuccess = (data) => ({ type: REQUESTED_PRODUCTS_SUCCEEDED, products: data });

export const requestProductsError = () => ({ type: REQUESTED_PRODUCTS_FAILED });

export const fetchProducts = () => ({ type: FETCHED_PRODUCTS });
