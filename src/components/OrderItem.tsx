import React from 'react';
import { ProductInfo, SummaryItem } from 'styled';

interface IOrderItem {
  img: string;
  title: string;
  color: string;
  qty: number;
  price: number;
}

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
