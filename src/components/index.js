import { connect } from 'react-redux';
import { fetchProducts } from 'redux/ducks/products';
import { Orders as OrdersComponent } from './Orders';

export { Shipping } from './Shipping';
export { Billing } from './Billing';
export { Payment } from './Payment';

export { BreadcrumbItem } from './BreadcrumbItem';
export { ButtonComponent } from './ButtonComponent';

export { FinishOrders } from './FinishOrders';

const mapStateToProps = (state) => ({
  orders: state.orders.products,
});

const mapDispatchToProps = {
  fetchProducts,
};

export const Orders = connect(mapStateToProps, mapDispatchToProps)(OrdersComponent);
