import { Billing } from 'components/Billing';
import { FinishOrders } from 'components/FinishOrders/FinishOrders';
import { Payment } from 'components/Payment';
import { Shipping } from 'components/Shipping';

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
