import { Billing } from 'components';
import { FinishOrders } from 'components';
import { Payment } from 'components';
import { Shipping } from 'components';

export const App = () => {
  return (
    <div>
      <Shipping />

      <Billing />

      <Payment />

      <FinishOrders />
    </div>
  );
};
