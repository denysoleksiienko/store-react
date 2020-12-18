import { connect } from 'react-redux';
import { fetchProducts } from 'redux/products/actions';
import { setName, setPhone, setEmail, setAddress, setOptional, setCity, setCountry, setZip } from 'redux/user/actions';
import { userState } from 'redux/user/selectors';

import { Orders as OrdersComponent } from './Orders/Orders';
import { Shipping as ShippingComponent } from './Shipping/Shipping';
import { Billing as BillingComponent } from './Billing/Billing';
import { FinishOrders as FinishOrdersComponent } from './FinishOrders/FinishOrders';

export { Payment } from './Payment/Payment';
export { BreadcrumbItem } from './BreadcrumbItem/BreadcrumbItem';
export { ButtonComponent } from './ButtonComponent/ButtonComponent';

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
};

export const Orders = connect(mapStateToProps, mapDispatchToProps)(OrdersComponent);
export const Shipping = connect(mapStateToProps, mapDispatchToProps)(ShippingComponent);
export const Billing = connect(mapStateToProps, mapDispatchToProps)(BillingComponent);
export const FinishOrders = connect(mapStateToProps, mapDispatchToProps)(FinishOrdersComponent);
