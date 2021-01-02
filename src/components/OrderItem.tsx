import React from 'react';
import { IOrderItem } from 'interfaces/Orders';

import { ProductInfo, SummaryItem } from 'styled';

export const OrderItem: React.FC<IOrderItem> = (props) => (
  <SummaryItem>
    <img src={props.img} alt={props.title} />

    <ProductInfo>
      <span>{props.title}</span>
      <span>{props.color}</span>
      <span>Quantity: {props.qty}</span>
    </ProductInfo>

    <span>${props.price}</span>
  </SummaryItem>
);
