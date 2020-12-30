import { REQUESTED_PRODUCTS, REQUESTED_PRODUCTS_SUCCEEDED, REQUESTED_PRODUCTS_FAILED } from 'store/ducks/products';
import { IProducts } from './Products';

interface actionType1 {
  type: typeof REQUESTED_PRODUCTS;
  products: IProducts[];
  error: boolean;
}

interface actionType2 {
  type: typeof REQUESTED_PRODUCTS_SUCCEEDED;
  products: IProducts[];
  error: boolean;
}

interface actionType3 {
  type: typeof REQUESTED_PRODUCTS_FAILED;
  products: IProducts[];
  error: boolean;
}

export type actionTypes = actionType1 | actionType2 | actionType3;
