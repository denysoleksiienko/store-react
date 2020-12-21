import { combineReducers } from 'redux';
import { reducer as productsReducer } from './ducks/products';

export const rootReducer = combineReducers({
  orders: productsReducer,
});
