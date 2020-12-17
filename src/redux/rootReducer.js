import { combineReducers } from 'redux';
import { reducer as productsReducer } from './products/reducer';

export const rootReducer = combineReducers({
  orders: productsReducer,
});
