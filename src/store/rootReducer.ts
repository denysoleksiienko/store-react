import { IProductState } from 'interfaces/Products';
import { combineReducers } from 'redux';
import { reducer as productsReducer } from './ducks/products';
import { reducer as userReducer, IUserState } from './ducks/user';

interface IAppState {
  orders?: IProductState;
  user?: IUserState;
}

export const rootReducer = combineReducers<IAppState>({
  orders: productsReducer,
  user: userReducer,
});
