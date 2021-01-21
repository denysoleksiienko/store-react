import React from 'react';
import { IOrderItem } from 'interfaces/Orders';

import { ProductInfo, SummaryItem } from 'styled';

export const OrderItem: React.FC<IOrderItem> = ({ img, title, color, qty, price }) => (
  <SummaryItem>
    <img src={img} alt={title} />

    <ProductInfo>
      <span>{title}</span>
      <span>{color}</span>
      <span>Quantity: {qty}</span>
    </ProductInfo>

    <span>${price}</span>
  </SummaryItem>
);
