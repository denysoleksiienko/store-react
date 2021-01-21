import { IProducts } from './Products';

export interface IOrders {
  orders: IProducts[];
  fetchProducts: Function;
}

export interface IOrderItem {
  img: string;
  title: string;
  color: string;
  qty: number;
  price: number;
}

export interface IOrderCost {
  subtotal: number;
}
export interface IFinishOrder {
  readonly user: {
    email: string;
  };
}
