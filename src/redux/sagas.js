import { call, put, takeEvery } from 'redux-saga/effects';
import { requestProducts, requestProductsSuccess, requestProductsError } from './products/actions';
import { PRODUCTS_URL } from 'constants/api';
import { FETCHED_PRODUCTS } from './products/actionTypes';

function* fetchProductsAsync() {
  try {
    yield put(requestProducts());
    const data = yield call(() => {
      return fetch(PRODUCTS_URL).then((response) => response.json());
    });
    yield put(requestProductsSuccess(data));
  } catch (error) {
    yield put(requestProductsError());
  }
}

function* watchFetchProducts() {
  yield takeEvery(FETCHED_PRODUCTS, fetchProductsAsync);
}

export default watchFetchProducts;
