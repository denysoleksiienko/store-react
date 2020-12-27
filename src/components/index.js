import { connect } from 'react-redux';
import { fetchProducts } from 'redux/ducks/products';
import {
  setName,
  setPhone,
  setEmail,
  setAddress,
  setOptional,
  setCity,
  setCountry,
  setZip,
  fetchCity,
} from 'redux/ducks/user';
import { userState } from 'redux/selectors';

import { Orders as OrdersComponent } from './Orders';
import { FinishOrders as FinishOrdersComponent } from './FinishOrders';

import { Shipping as ShippingComponent } from './Shipping';
import { Billing as BillingComponent } from './Billing';

export { Breadcrumbs } from './Breadcrumbs';
export { Button } from './Button';
export { Payment } from './Payment';
export { OrderItem } from './OrderItem';
export { OrderCost } from './OrderCost';
export { CreditCard } from './CreditCard';

const mapStateToProps = (state) => ({
  orders: state.orders.products,
  user: userState(state),
});

const mapDispatchToProps = {
  fetchProducts,
  setName,
  setPhone,
  setEmail,
  setAddress,
  setOptional,
  setCity,
  setCountry,
  setZip,
  fetchCity,
};

export const Orders = connect(mapStateToProps, mapDispatchToProps)(OrdersComponent);
export const Shipping = connect(mapStateToProps, mapDispatchToProps)(ShippingComponent);
export const Billing = connect(mapStateToProps, mapDispatchToProps)(BillingComponent);
export const FinishOrders = connect(mapStateToProps, mapDispatchToProps)(FinishOrdersComponent);
