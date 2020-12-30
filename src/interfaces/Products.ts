export interface IProducts {
  id: number;
  title: string;
  price: number;
  color: string;
  img: string;
  qty: number;
}

export interface IProductState {
  products: IProducts[];
  error: boolean;
}
