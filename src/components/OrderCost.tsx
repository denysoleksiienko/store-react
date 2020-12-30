import React from 'react';
import { SummaryCost, SummaryTotal, SummaryCostInner } from 'styled';

interface IOrderCost {
  subtotal: number;
}

export const OrderCost: React.FC<IOrderCost> = ({ subtotal }) => (
  <SummaryCost>
    <SummaryCostInner>
      <span>Subtotal</span>
      <span>${subtotal}</span>
    </SummaryCostInner>
    <SummaryCostInner>
      <span>Shipping</span>
      <span>Free</span>
    </SummaryCostInner>
    <SummaryCostInner>
      <span>Taxes</span>
      <span>$10</span>
    </SummaryCostInner>
    <hr />

    <SummaryCostInner>
      <SummaryTotal>Total</SummaryTotal>
      <SummaryTotal>${subtotal + 10}</SummaryTotal>
    </SummaryCostInner>
  </SummaryCost>
);
