import { connect } from 'react-redux';
import { fetchProducts } from 'redux/products/actions';
import { Orders as OrdersComponent } from './Orders/Orders';

export { Shipping } from './Shipping/Shipping';
export { Billing } from './Billing/Billing';
export { Payment } from './Payment/Payment';

export { BreadcrumbItem } from './BreadcrumbItem/BreadcrumbItem';
export { ButtonComponent } from './ButtonComponent/ButtonComponent';

export { FinishOrders } from './FinishOrders/FinishOrders';

const mapStateToProps = (state) => ({
  orders: state.orders.products,
});
const mapDispatchToProps = {
  fetchProducts,
};

export const Orders = connect(mapStateToProps, mapDispatchToProps)(OrdersComponent);
