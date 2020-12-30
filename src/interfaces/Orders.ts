import { IProducts } from './Products';

export interface IOrders {
  orders: IProducts[];
  fetchProducts: Function;
}
