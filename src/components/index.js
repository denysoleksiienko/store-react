import { connect } from 'react-redux';
import { fetchProducts } from 'redux/ducks/products';
import { setName, setPhone, setEmail, setAddress, setOptional, setCity, setCountry, setZip } from 'redux/ducks/user';
import { userState } from 'redux/selectors';

import { AddressFields as AddressFieldsComponent } from './AddressFields';
import { ContactFields as ContactFieldsComponent } from './ContactFields';
import { Orders as OrdersComponent } from './Orders';
import { FinishOrders as FinishOrdersComponent } from './FinishOrders';

export { Breadcrumbs } from './Breadcrumbs';
export { Button } from './Button';

export { Shipping } from './Shipping';
export { Billing } from './Billing';
export { Payment } from './Payment';

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
export const AddressFields = connect(mapStateToProps, mapDispatchToProps)(AddressFieldsComponent);
export const ContactFields = connect(mapStateToProps, mapDispatchToProps)(ContactFieldsComponent);
export const FinishOrders = connect(mapStateToProps, mapDispatchToProps)(FinishOrdersComponent);
