import { all } from 'redux-saga/effects';
import watchFetchProducts from './ducks/products';
import watchFetchCity from './ducks/user';

function* rootSaga() {
  yield all([watchFetchProducts(), watchFetchCity()]);
}

export default rootSaga;
