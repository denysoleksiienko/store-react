import React from 'react';
import { OrderItem, OrderCost } from 'components';

import { SummaryTitle, SummaryWrap, SummaryList } from 'styled';

import { IOrders } from 'interfaces/Orders';
import { IProducts } from 'interfaces/Products';

export const Orders: React.FC<IOrders> = ({ orders, fetchProducts }) => {
  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let subtotal: number = 0;

  return (
    <>
      <SummaryTitle>Order Summary</SummaryTitle>

      <SummaryWrap>
        <SummaryList>
          {orders.map(({ id, img, title, color, qty, price }: IProducts) => {
            subtotal += price;
            return <OrderItem key={id} img={img} title={title} color={color} qty={qty} price={price} />;
          })}
        </SummaryList>

        <OrderCost subtotal={subtotal} />
      </SummaryWrap>
    </>
  );
};
