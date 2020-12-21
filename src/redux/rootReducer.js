import { combineReducers } from 'redux';
import { reducer as productsReducer } from './ducks/products';
import { reducer as userReducer } from './ducks/user';

export const rootReducer = combineReducers({
  orders: productsReducer,
  user: userReducer,
});
