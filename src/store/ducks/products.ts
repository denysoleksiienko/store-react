import { call, put, takeEvery } from 'redux-saga/effects';
import { PRODUCTS_URL } from 'constants/api';

const REQUESTED_PRODUCTS: string = 'REQUESTED_PRODUCTS';
const REQUESTED_PRODUCTS_SUCCEEDED: string = 'REQUESTED_PRODUCTS_SUCCEEDED';
const REQUESTED_PRODUCTS_FAILED: string = 'REQUESTED_PRODUCTS_FAILED';
const FETCHED_PRODUCTS: string = 'FETCHED_PRODUCTS';

interface ProductState {
  products: [];
  error: boolean;
}

const initialState: ProductState = {
  products: [],
  error: false,
};

export const reducer = (state = initialState, action: any): ProductState => {
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

const requestProducts = () => ({ type: REQUESTED_PRODUCTS });
const requestProductsSuccess = (data: Array<[]>) => ({ type: REQUESTED_PRODUCTS_SUCCEEDED, products: data });
const requestProductsError = (error: boolean) => ({ type: REQUESTED_PRODUCTS_FAILED, error });
export const fetchProducts = () => ({ type: FETCHED_PRODUCTS });

function* fetchProductsAsync() {
  try {
    yield put(requestProducts());
    const data = yield call(() => fetch(PRODUCTS_URL).then((response) => response.json()));
    yield put(requestProductsSuccess(data));
  } catch (error) {
    yield put(requestProductsError(error));
  }
}

function* watchFetchProducts() {
  yield takeEvery(FETCHED_PRODUCTS, fetchProductsAsync);
}

export default watchFetchProducts;
