import { Route, Switch } from 'react-router-dom';
import { SHIPPING, BILLING, PAYMENT, ORDER } from 'constants/pathnames';
import { Shipping, Billing, Payment, FinishOrders } from 'components';

const routes = [
  { path: SHIPPING, component: Shipping, exact: true },
  { path: BILLING, component: Billing, exact: false },
  { path: PAYMENT, component: Payment, exact: false },
  { path: ORDER, component: FinishOrders, exact: false },
];

export const Routes = () => (
  <Switch>
    {routes.map((props) => (
      <Route key={props.path} {...props} />
    ))}
  </Switch>
);
