import { combineReducers } from 'redux';
import { reducer as productsReducer } from './products/reducer';
import { reducer as userReducer } from './user/reducer';

export const rootReducer = combineReducers({
  orders: productsReducer,
  user: userReducer,
});
