import { takeEvery } from 'redux-saga/effects';
import { fetchProductsAsync } from './ducks/products';
import { FETCHED_PRODUCTS } from './ducks/products';

function* watchFetchProducts() {
  yield takeEvery(FETCHED_PRODUCTS, fetchProductsAsync);
}

export default watchFetchProducts;
